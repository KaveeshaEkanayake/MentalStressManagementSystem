// JournalEntries.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaEdit, FaTrash, FaSave, FaTimes } from 'react-icons/fa';

function JournalEntries() {
  const [entries, setEntries] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editingContent, setEditingContent] = useState('');

  useEffect(() => {
    fetchEntries();
  }, []);

  const fetchEntries = async () => {
    const res = await axios.get('http://localhost:5000/api/journals');
    setEntries(res.data);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/journals/${id}`);
    fetchEntries();
  };

  const handleUpdate = async (id) => {
    await axios.put(`http://localhost:5000/api/journals/${id}`, {
      content: editingContent,
    });
    setEditingId(null);
    setEditingContent('');
    fetchEntries();
  };

  return (
    <div>
      <h2 style={{ color: '#bb86fc' }}>📚 Your Entries</h2>
      {entries.map((entry) => (
        <div className="entry" key={entry._id}>
          <p><strong>{new Date(entry.createdAt).toLocaleString()}</strong></p>
          {editingId === entry._id ? (
            <>
              <textarea
                value={editingContent}
                onChange={(e) => setEditingContent(e.target.value)}
              />
              <br />
              <button onClick={() => handleUpdate(entry._id)}><FaSave /> Save</button>
              <button onClick={() => setEditingId(null)}><FaTimes /> Cancel</button>
            </>
          ) : (
            <>
              <p>{entry.content}</p>
              <button onClick={() => {
                setEditingId(entry._id);
                setEditingContent(entry.content);
              }}><FaEdit /> Edit</button>
              <button onClick={() => handleDelete(entry._id)}><FaTrash /> Delete</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default JournalEntries;
