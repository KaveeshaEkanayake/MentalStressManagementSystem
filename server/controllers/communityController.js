import Question from '../models/Question.js';
import User from '../models/User.js';

const askQuestion = async (req, res) => {
  try {
    const { userId, username, questionText } = req.body;

    if (!username || !questionText) {
      return res.status(400).json({ message: 'Username and question text required' });
    }

    const question = new Question({
      userId: userId || null,
      username,
      questionText,
    });

    await question.save();
    res.status(201).json(question);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getQuestions = async (req, res) => {
  try {
    const questions = await Question.find().sort({ createdAt: -1 });
    res.status(200).json(questions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const answerQuestion = async (req, res) => {
  try {
    const { questionId } = req.params;
    const { userId, username, answerText, isCounsellor } = req.body;

    if (!answerText || !username) {
      return res.status(400).json({ message: 'Answer text and username required' });
    }

    const question = await Question.findById(questionId);
    if (!question) return res.status(404).json({ message: 'Question not found' });

    question.answers.push({
      userId: userId || null,
      username,
      answerText,
      isCounsellor: !!isCounsellor,
    });

    await question.save();
    res.status(201).json(question);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export {
  askQuestion,
  getQuestions,
  answerQuestion,
};
