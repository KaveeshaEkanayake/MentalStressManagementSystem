import React from 'react';

function Home({ setView }) {
  return (
    <div>
      <h1>My Journal</h1>
      <button onClick={() => setView('add')}>Add New</button>
      <button onClick={() => setView('list')}>Journal Entries</button>
    </div>
  );
}

export default Home;
