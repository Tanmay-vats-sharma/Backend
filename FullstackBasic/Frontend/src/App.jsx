import React, { useEffect } from 'react'
import axios from 'axios';
function App() {
  const [jokes, setJokes] = React.useState([]);
  useEffect(() => {
    axios.get('/api/jokes')
      .then(response => {
        setJokes(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <h1>Learning Full stack</h1>
      <p>jokes: {jokes.length}</p>
      {
        jokes.map((joke,index) => (
          <div key={joke.id}>
            <h3>{joke.question}</h3>
            <p>{joke.joke}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
