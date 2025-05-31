import React, { useEffect, useState } from 'react';
import AskQuestion from '../components/AskQuestion';
import CommunityFeed from '../components/CommunityFeed';
import generateRandomName from '../utils/generateName';

function CommunityPage() {
  const [username, setUsername] = useState(null);
  const [refreshFeed, setRefreshFeed] = useState(false);

  useEffect(() => {
    let savedName = localStorage.getItem('communityUsername');
    if (!savedName) {
      savedName = generateRandomName();
      localStorage.setItem('communityUsername', savedName);
    }
    setUsername(savedName);
  }, []);

  if (!username) return <div>Loading...</div>;

  return (
    <div className="container">
      <h2 style={{ color: '#7f5af0', borderBottom: '2px solid #7f5af0', paddingBottom: '8px' }}>
        Community
      </h2>
      <p>Your username: <strong>{username}</strong></p>
      <AskQuestion
        username={username}
        onQuestionAsked={() => setRefreshFeed((prev) => !prev)}
      />
      <CommunityFeed
        key={refreshFeed}
        username={username}
        isCounsellor={false}
      />
    </div>
  );
}

export default CommunityPage;
