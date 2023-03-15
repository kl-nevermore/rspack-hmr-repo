import React from 'react';
import { CountContext } from './CountProvider';

function App() {
  const { count, setCount } = React.useContext(CountContext);
  function onClick() {
    setCount((v) => v + 1);
  }
  return (
    <div className='App'>
      <p>
        <button onClick={() => setCount((count) => count + 1)}>
          count is: {count}
        </button>
      </p>
    </div>
  );
}

export default App;
