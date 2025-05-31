import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { AppContent } from '../context/AppContext.jsx';
import { motion, AnimatePresence } from 'framer-motion'; // ✅ Make sure this is here


const Header = () => {
  const { userdata } = useContext(AppContent);
  const [mood, setMood] = useState(null);

  const moodData = {
    good: {
      emoji: '🎉',
      message: "That's good to hear! Let's write a gratitude note inside the journal.",
    },
    neutral: {
      emoji: '🙂',
      message: "Ah, it's okay. We can uplift your mood—let's go play some games!",
    },
    bad: {
      emoji: '🤗',
      message: "Don't worry, we're here for you. Let's talk in the chatbot, come dear.",
    },
  };

  return (
    <div className='flex flex-col items-center mt-20 px-4 text-center text-white'>
      <img src={assets.header_img} alt="" className='w-36 h-36 rounded-full mb-6' />
      <h1 className='flex items-center gap-2 text-xl sm:text-3xl font-medium mb-2'>
        Hey {userdata ? userdata.name : 'there'}!
        <img className='w-8 aspect-square' src={assets.hand_wave} alt="wave" />
      </h1>
      <h2 className='text-3xl sm:text-5xl font-semibold mb-4'>How was your day?</h2>

      <div className='flex gap-4 mb-8'>
        <button
          onClick={() => setMood('good')}
          className='bg-black text-white border-2 border-purple-500 rounded-lg px-6 py-2 flex items-center gap-2 hover:bg-purple-700 transition'
        >
          Good <span role="img" aria-label="smile">😊</span>
        </button>
        <button
          onClick={() => setMood('neutral')}
          className='bg-black text-white border-2 border-purple-500 rounded-lg px-6 py-2 flex items-center gap-2 hover:bg-purple-700 transition'
        >
          Neutral <span role="img" aria-label="neutral">😐</span>
        </button>
        <button
          onClick={() => setMood('bad')}
          className='bg-black text-white border-2 border-purple-500 rounded-lg px-6 py-2 flex items-center gap-2 hover:bg-purple-700 transition'
        >
          Bad <span role="img" aria-label="sad">😔</span>
        </button>
      </div>

      <AnimatePresence>
        {mood && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative bg-purple-900 text-white rounded-xl p-6 max-w-md w-full shadow-lg border border-purple-600"
          >
            <button
              onClick={() => setMood(null)}
              className="absolute top-2 right-2 text-white hover:text-purple-400 text-lg"
            >
              ✖
            </button>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="text-5xl mb-4"
            >
              {moodData[mood].emoji}
            </motion.div>
            <p className="text-lg font-medium">{moodData[mood].message}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
