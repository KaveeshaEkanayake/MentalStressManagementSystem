import React, { useEffect, useState } from 'react';
import axios from 'axios';

function JournalList({ setView }) {
  const [entries, setEntries] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editContent, setEditContent] = useState('');

  const loadEntries = async () => {
    const res = await axios.get('http://localhost:5000/api/journals');
    setEntries(res.data);
  };

  const saveEdit = async (id) => {
    await axios.put(`http://localhost:5000/api/journals/${id}`, {
      content: editContent
    });
    setEditingId(null);
    loadEntries();
  };

  const deleteEntry = async (id) => {
    await axios.delete(`http://localhost:5000/api/journals/${id}`);
    loadEntries();
  };

  useEffect(() => {
    loadEntries();
  }, []);

  return (
    <div>
      <h2>Journal Entries</h2>
      {entries.map(entry => (
        <div key={entry._id} style={{ marginBottom: '20px' }}>
          <p><strong>{new Date(entry.timestamp).toLocaleString()}</strong></p>
          {editingId === entry._id ? (
            <>
              <textarea
                rows="5"
                cols="50"
                value={editContent}
                onChange={e => setEditContent(e.target.value)}
              />
              <br />
              <button onClick={() => saveEdit(entry._id)}>Save</button>
              <button onClick={() => setEditingId(null)}>Cancel</button>
            </>
          ) : (
            <>
              <p>{entry.content}</p>
              <button onClick={() => {
                setEditingId(entry._id);
                setEditContent(entry.content);
              }}>Edit</button>
              <button onClick={() => deleteEntry(entry._id)}>Delete</button>
            </>
          )}
        </div>
      ))}
      <button onClick={() => setView('')}>Back</button>
    </div>
  );
}

export default JournalList;
