import React, { useState } from 'react';
import { FaReply } from 'react-icons/fa';
import api from '../services/api';

function AnswerBox({ questionId, username, isCounsellor, onAnswerAdded }) {
  const [answerText, setAnswerText] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!answerText.trim()) return;

    try {
      await api.post(`/answer/${questionId}`, {
        username,
        answerText,
        isCounsellor,
      });
      setAnswerText('');
      onAnswerAdded();
    } catch (error) {
      console.error('Failed to add answer:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '10px' }}>
      <textarea
        placeholder="Write your reply..."
        value={answerText}
        onChange={(e) => setAnswerText(e.target.value)}
        rows={2}
        required
      />
      <button type="submit">
        <FaReply style={{ marginRight: '5px' }} />
        Reply
      </button>
    </form>
  );
}

export default AnswerBox;
