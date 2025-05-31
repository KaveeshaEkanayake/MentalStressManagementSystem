// AddJournal.js
import React, { useState } from 'react';
import axios from 'axios';
import { FaSave } from 'react-icons/fa';

function AddJournal() {
  const [content, setContent] = useState('');

  const handleSubmit = async () => {
    if (!content) return alert("Journal can't be empty!");
    await axios.post('http://localhost:5000/api/journals', { content });
    setContent('');
    alert('Journal saved!');
  };

  return (
    <div>
      <textarea
        rows="10"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write your journal entry..."
      />
      <br />
      <button onClick={handleSubmit}><FaSave /> Save</button>
    </div>
  );
}

export default AddJournal;
