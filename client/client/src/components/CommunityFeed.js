import React, { useEffect, useState } from 'react';
import { FaUserCircle, FaUserShield } from 'react-icons/fa';
import AnswerBox from './AnswerBox';
import api from '../services/api';

function CommunityFeed({ username, isCounsellor }) {
  const [questions, setQuestions] = useState([]);

  const fetchQuestions = async () => {
    try {
      const { data } = await api.get('/');
      setQuestions(data);
    } catch (error) {
      console.error('Failed to load questions:', error);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  return (
    <div>
      {questions.map((q) => (
        <div key={q._id} className="card">
          <div className="profile-header" style={{ marginBottom: '10px' }}>
            <FaUserCircle size={30} color="#7f5af0" />
            <strong style={{ color: '#7f5af0' }}>{q.username}</strong> asked:
          </div>
          <p>{q.questionText}</p>
          <div className="answer-section">
            <h4>Answers:</h4>
            {q.answers.length === 0 && <p>No answers yet</p>}
            {q.answers.map((a) => (
              <div key={a._id} className="answer">
                <strong className={a.isCounsellor ? 'counsellor' : ''}>
                  {a.isCounsellor ? <FaUserShield /> : <FaUserCircle />} {a.username}
                  {a.isCounsellor ? ' (Counsellor)' : ''}
                </strong>: {a.answerText}
              </div>
            ))}
            <AnswerBox
              questionId={q._id}
              username={username}
              isCounsellor={isCounsellor}
              onAnswerAdded={fetchQuestions}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default CommunityFeed;
