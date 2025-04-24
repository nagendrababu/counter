import "./styles.css";
import { useState } from "react";
const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <h1>{counter}</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        + (Plus)
      </button>
      <button
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        - (Minus)
      </button>
    </div>
  );
};

export default App;
