import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter - 1)}>-</button>
    </div>
  );
}

export default App;
