const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/jokes', (req, res) => {
  const jokes = [   
    {
      id: 1,
      question: 'Why did the scarecrow win an award?',
      joke: 'Why did the scarecrow win an award? Because he was outstanding in his field!'
    },
    {
      id: 2,
      question: 'What do you call a fish wearing a crown?',
      joke: 'What do you call a fish wearing a crown? King Cod!'
    },
    {
      id: 3,
      question: 'What do you call a pile of cats?',
      joke: 'What do you call a pile of cats? A meowtain!'
    },
    {
      id: 4,
      question: 'Why did the tomato turn red?',
      joke: 'Why did the tomato turn red? Because it saw the salad dressing!'
    },
    {
      id: 5,
      question: 'What do you call a bear with no teeth?',
      joke: 'What do you call a bear with no teeth? A gummy bear!'
    },
    {
      id: 6,
      question: 'What do you call a pile of cats?',
      joke: 'What do you call a pile of cats? A meowtain!'
    },

  ];  
  res.send(jokes);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});