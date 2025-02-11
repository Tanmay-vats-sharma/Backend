const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.get('/', (req, res) => {
  res.send('Hello World');
});

//get a list of 5 jokes

app.get('/jokes', (req, res) => {
  const jokes = [
    {
      id: 1,
      title : 'Why did the scarecrow win an award?',
      joke: 'Why did the scarecrow win an award? Because he was outstanding in his field!',
    },
    {
      id: 2,
      title : 'What do you call a fish wearing a crown?',
      joke: 'What do you call a fish wearing a crown? A king fish!',
    },
    {
      id: 3,
      title : 'What do you call a pile of cats?',
      joke: 'What do you call a pile of cats? A meowtain!',
    },
    {
      id: 4,
      title : 'What do you call a bear with no teeth?',
      joke: 'What do you call a bear with no teeth? A gummy bear!',
    },
    {
      id: 5,
      title : 'What do you call a pile of cats?',
      joke: 'What do you call a pile of cats? A meowtain!',
    },
  ];
  res.send(jokes);
});

app.listen(port, () => {
  console.log('Server is running on port 3000');
});