import React, { useState } from 'react';
import { FaQuestionCircle } from 'react-icons/fa';
import api from '../services/api';

function AskQuestion({ username, onQuestionAsked }) {
  const [questionText, setQuestionText] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!questionText.trim()) return;

    try {
      await api.post('/ask', {
        username,
        questionText,
      });
      setQuestionText('');
      onQuestionAsked();
    } catch (error) {
      console.error('Failed to ask question:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="card">
      <textarea
        placeholder="Ask your question anonymously..."
        value={questionText}
        onChange={(e) => setQuestionText(e.target.value)}
        rows={3}
        required
      />
      <button type="submit">
        <FaQuestionCircle style={{ marginRight: '5px' }} />
        Ask
      </button>
    </form>
  );
}

export default AskQuestion;
