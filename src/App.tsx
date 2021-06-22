import { useState } from "react";

function App() {

  const [counter, setCounter] = useState(0)

  function incrementCounter() {
    setCounter(counter + 1)
  }

  return (
    <button onClick={incrementCounter}>
      {counter}
    </button>
  );
}

export default App;
