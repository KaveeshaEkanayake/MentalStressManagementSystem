import Sentiment from 'sentiment';
import Chat from '../models/chat.js';

const sentiment = new Sentiment();

const getResponse = (sentimentScore) => {
  const responses = {
   positive: [
      "That's amazing to hear! Your positivity is truly inspiring 🌟",
      "I'm really happy you're feeling good today. Keep it going! 😊",
      "You sound like you're in a good place. Keep embracing that feeling!",
      "Yay! Moments like this are so important—cherish it 💛",
      "Awesome! I'm here to celebrate those good vibes with you 🎉","That’s so heartwarming to hear. May your joy keep growing like sunlight in spring 🌸",
      "Your happiness is shining through — it’s truly a beautiful thing to witness ✨",
      "It’s lovely to hear you’re feeling good. I’m rooting for your continued peace and happiness 💫",
      "You radiate such gentle strength and positivity — keep holding onto that light 💛",
      "Moments like these are precious. I’m so happy you’re having one 🌼",
      "You’ve earned this joy. Let it wrap around you like a cozy hug 🧣",
      "Your smile, even if I can’t see it, is felt here. Stay glowing 🌟"
    ],
    negative: [
      "I'm here for you. These feelings will pass—you're not alone 🌧️",
      "I understand things feel hard right now. You’ve made it this far and you’ll make it through this too 💪",
      "Take a moment to breathe. I’m listening, and I care.",
      "It's okay to feel down sometimes. Your feelings are valid and I'm right here with you.",
      "You're stronger than your struggles. One step at a time—we're in this together 💙","I’m here with you, just like a calm evening by the sea 🌊 — tell me what’s on your heart.",
      "Even in the quiet, you’re not alone. What’s been on your mind lately? 💭",
      "It’s okay if nothing major is happening — just being here matters too 🤍",
      "Let’s talk, even if it’s about the little things. Sometimes they mean the most 🌷",
      "Whatever kind of day you’re having, I’m here to listen. No pressure, just presence 🌙",
      "How has life been treating your heart lately? I’m all ears 👂💗"

    ],
    neutral: [
      "Tell me more about what's been going on 💭",
      "I'm listening. Anything on your mind today?",
      "Thanks for checking in—how are things for you lately?",
      "I'm here to chat, even if it's just a regular day.",
      "Your thoughts matter. Feel free to open up if you'd like.", "You don’t have to face this alone — I’m here, and your feelings matter deeply 🫂",
      "Even the stormiest nights pass. Let’s breathe through this one together 🌧️",
      "You are allowed to feel everything — pain, sorrow, confusion. You’re still beautifully whole 💔💖",
      "It’s okay to not be okay. You’re still worthy of love, care, and patience 🌌",
      "I know this hurts. You’re not broken — you’re just being human, and that’s incredibly brave 💙",
      "Please be gentle with yourself today. Healing isn’t linear, and that’s perfectly okay 🌿",
      "If you could use a quiet companion right now, I’m here with all the warmth I can give 🤗"
    ]
  };

  if (sentimentScore > 0) return responses.positive[Math.floor(Math.random() * responses.positive.length)];
  if (sentimentScore < 0) return responses.negative[Math.floor(Math.random() * responses.negative.length)];
  return responses.neutral[Math.floor(Math.random() * responses.neutral.length)];
};

export const chatWithBot = async (req, res) => {
  const { message } = req.body;
  const userId = req.userId;

  const trimmedMessage = message.trim().toLowerCase();
  const greetings = ["hello", "hi", "hey", "hola", "hi there", "hey there"];

  try {
    const isGreeting = greetings.some(greet => trimmedMessage === greet || trimmedMessage.startsWith(greet + " "));

    let reply;
    let sentimentLabel;

    if (isGreeting) {
      reply = "Hello! 😊 It's nice to see you. How are you feeling today?";
      sentimentLabel = "greeting";
    } else {
      const { score } = sentiment.analyze(message);
      reply = getResponse(score);
      sentimentLabel = score;
    }

    // Simulated delay
    setTimeout(() => {
      res.json({ reply, sentiment: sentimentLabel });
    }, 1500); // 1.5s typing delay
  } catch (error) {
    console.error("Chat error:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
};

export const getChatHistory = async (req, res) => {
  try {
    const chats = await Chat.find({ user: req.userId }).sort({ createdAt: -1 });
    res.json(chats);
  } catch (error) {
    console.error("Error fetching chat history:", error);
    res.status(500).json({ error: "Failed to get chat history" });
  }
};
