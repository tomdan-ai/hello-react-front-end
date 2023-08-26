import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3000/api/v1/random_greeting')
      .then(response => {
        setGreeting(response.data.message);
      })
      .catch(error => {
        console.error('Error fetching random greeting:', error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>{greeting}</h1>
      </header>
    </div>
  );
}

export default App;





// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
