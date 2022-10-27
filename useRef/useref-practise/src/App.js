import { useState, useRef } from "react";

function App() {
  const [randomInput, setRandomInput] = useState("");
  const [seconds, setSeconds] = useState(0);

  const renders = useRef(0);
  const inputRef = useRef();
  const timerId = useRef();

  const handleChange = (e) => {
    setRandomInput(e.target.value);
    renders.current++;
  };

  /* const focusOnInput = () => {
    inputRef.current.focus();
  }; */

  const startTimer = () => {
    timerId.current = setInterval(() => {
      renders.current++;
      setSeconds((prev) => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerId.current);
    timerId.current = 0;
  };

  const resetTimer = () => {
    stopTimer();
    if (seconds) {
      renders.current++;
      setSeconds(0);
    }
  };

  return (
    <main className="App">
      <input
        ref={inputRef}
        type="text"
        value={randomInput}
        placeholder="Random Input"
        onChange={handleChange}
      />
      <p>Renders : {renders.current}</p>
      <br />
      {/* <button onClick={focusOnInput}>Focus input</button> */}
      <section>
        <button onClick={startTimer}>Start Timer</button>
        <button onClick={stopTimer}>Stop Timer</button>
        <button onClick={resetTimer}>Reset Timer</button>
      </section>

      <br />
      <p>Seconds : {seconds}</p>
      <p>{randomInput}</p>
    </main>
  );
}

export default App;
