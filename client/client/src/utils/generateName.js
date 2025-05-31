function generateRandomName() {
  const adjectives = ['Calm', 'Happy', 'Bright', 'Brave', 'Kind'];
  const animals = ['Lion', 'Eagle', 'Fox', 'Dolphin', 'Bear'];
  return (
    adjectives[Math.floor(Math.random() * adjectives.length)] +
    animals[Math.floor(Math.random() * animals.length)] +
    Math.floor(Math.random() * 1000)
  );
}

export default generateRandomName;