import { useState } from "react";
import "./App.css";

function App() {
  const [result, setResult] = useState("");

  const handleClick = (event) => {
    setResult(result.concat(event.target.value));
  };

  const clear = () => {
    setResult("")
  }

  const del = () => {
    setResult(result.slice(0, - 1))
  }

  const calculate = () => {
    try {
      setResult(eval(result).toString())
    } catch(error) {
      setResult("Error")
    }
    
  }

  return (
    <div className="calculator-grid">
      <div className="output">
        <input className="previous-operand" type="text" value={result} />
      </div>
      <button className="span-two" onClick={clear}>AC</button>
      <button onClick={del} className="highlight">DEL</button>
      <button value="/" onClick={handleClick} className="highlight">÷</button>
      <button value="1" onClick={handleClick}>1</button>
      <button value="2" onClick={handleClick}>2</button>
      <button value="3" onClick={handleClick}>3</button>
      <button value="*" onClick={handleClick} className="highlight">*</button>
      <button value="4" onClick={handleClick}>4</button>
      <button value="5" onClick={handleClick}>5</button>
      <button value="6" onClick={handleClick}>6</button>
      <button value="+" onClick={handleClick} className="highlight">+</button>
      <button value="7" onClick={handleClick}>7</button>
      <button value="8" onClick={handleClick}>8</button>
      <button value="9" onClick={handleClick}>9</button>
      <button value="-" onClick={handleClick} className="highlight">-</button>
      <button value="." onClick={handleClick}>.</button>
      <button value="0" onClick={handleClick}>0</button>
      <button className="span-two" onClick={calculate}>=</button>
    </div>
  );
}

export default App;
