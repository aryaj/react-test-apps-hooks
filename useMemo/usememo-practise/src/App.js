import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect, useMemo, useCallback } from "react";

const getArray = () => {
  for (let i = 0; i < 1000000000; i++) {}
  return ["Ajay", "Arya"];
};

function App() {
  const [userNumber, setUserNumber] = useState("");
  const [randomInput, setRandomInput] = useState("");

  const fib = useCallback((n) => {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
  }, []);

  const fibNumber = useMemo(() => fib(userNumber), [userNumber, fib]);

  const myArray = useMemo(() => getArray(), []);

  useEffect(() => {
    console.log("New array");
  }, [myArray]);

  return (
    <div className="App">
      <main>
        <label>Fibonacci Sequence</label>
        <input
          type="number"
          value={userNumber}
          placeholder="Position"
          onChange={(e) => setUserNumber(e.target.value)}
        />
        <p>Number : {fibNumber || "--"}</p>
        <br />
        <br />
        <label>Random Input:</label>
        <input
          type="text"
          value={randomInput}
          placeholder="Random Input"
          onChange={(e) => setRandomInput(e.target.value)}
        />
        <p>{randomInput}</p>
      </main>
    </div>
  );
}

export default App;
