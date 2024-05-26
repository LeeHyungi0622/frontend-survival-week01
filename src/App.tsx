import { useState } from 'react';
import Greeting from './components/Greeting';

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <Greeting name='city'/>
      <img src='/images/city.jpg' alt='city image' width='500' />
      <p>Count: {count}</p>
      <button type='button' onClick={handleClick}>
                increase
      </button>
    </div>
  );
}

export default App;
