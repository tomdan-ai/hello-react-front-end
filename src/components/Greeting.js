import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRandomGreeting } from './redux/greetingSlice';

function Greeting() {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.greeting.greeting);
  const status = useSelector((state) => state.greeting.status);
  const error = useSelector((state) => state.greeting.error);

  useEffect(() => {
    dispatch(fetchRandomGreeting());
  }, [dispatch]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>This App Shows You a Greeting!!!😎</h1>
        {status === 'loading' ? (
          <p>Loading...</p>
        ) : status === 'failed' ? (
          <p>
            Error:
            {error}
          </p>
        ) : (
          <p>{greeting}</p>
        )}
      </header>
    </div>
  );
}

export default Greeting;
