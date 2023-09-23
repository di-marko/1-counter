import { useState } from 'react';
import './index.scss';

function App() {
  const[count, setCount] = useState(0)

  const onClickAdd = () => {
    setCount(count + 1);
  }

  const onClickSub = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  return (
    <div className="App">
      <div>
        <h2>Counter:</h2>
        <h1>{count}</h1>
        <button onClick={onClickSub} className="minus eightbit-btn">- Minus</button>
        <button onClick={onClickAdd} className="plus eightbit-btn">Plus +</button>
      </div>
    </div>
  );
}

export default App;
