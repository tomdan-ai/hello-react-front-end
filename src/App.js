import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Make sure to use the correct imports

import Greeting from './components/Greeting';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Greeting />} />
      </Routes>
    </Router>
  );
}

export default App;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function App() {
//   const [greeting, setGreeting] = useState('');

//   useEffect(() => {
//     axios.get('http://localhost:3001/api/v1/random_greeting')
//       .then((response) => {
//         setGreeting(response.data.message);
//       })
//       .catch((error) => {
//         throw new Error('Error fetching random greeting:', error);
//       });
//   }, []);

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>This App Shows You a greeting!!!</h1>
//         <p>{greeting}</p>
//       </header>
//     </div>
//   );
// }

// export default App;
