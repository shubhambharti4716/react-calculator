import { useState } from "react";
import "./App.css";

function App() {
   // State variables to store input values, status, message, and result
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("");
  const [result, setResult] = useState(null);
  
  // Function to validate input values
  function validateInputs() {
    // Check if either of the input fields is empty
    if (!num1.trim() || !num2.trim()) {
      setStatus("Error!");
      setMessage("Please enter both numbers.");
      setResult(null);
      return false;
    }

     // Regular expression to check if the input values are valid numbers
    const regex = /^-?\d*\.?\d+$/;
    if (!regex.test(num1) || !regex.test(num2)) {
      setStatus("Error!");
      setMessage("Please enter valid numbers.");
      setResult(null);
      return false;
    }
    return true;
  }

  // Function to perform the calculation based on the operation type
  function calculate(type) {
    if (validateInputs()) {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    // Check for division by zero
    if (type === "/" && number2 === 0) {
      setStatus("Error!");
      setMessage("Cannot divide by zero.");
      setResult(null);
      return;
    }

    // Perform the calculation based on the operation type
    switch (type) {
      case "+":
        setResult(number1 + number2);
        break;
      case "-":
        setResult(number1 - number2);
        break;
      case "*":
        setResult(number1 * number2);
        break;
      case "/":
        setResult(number1 / number2);
        break;
      default:
        return;
    }
     // Set status to Success, clear message, and reset input values
    setStatus("Success!");
    setMessage("");
    setNum1("");
    setNum2("");
  }
  }

  return (
      <div className="main">
        <div className="calculator-container">
        <h1>React Calculator</h1>
        {/* Input fields for entering numbers */}
        <input
          type="text"
          placeholder="Num 1"
          onChange={(e) => setNum1(e.target.value)}
          value={num1}
        />
        <input
          type="text"
          placeholder="Num 2"
          onChange={(e) => setNum2(e.target.value)}
          value={num2}
        />
        {/* Buttons for different operations */}
        <div className="buttons-container">
          <button
            type="button"
            className="button"
            onClick={() => calculate("+")}
          >
            +
          </button>
          <button
            type="button"
            className="button"
            onClick={() => calculate("-")}
          >
            -
          </button>
          <button
            type="button"
            className="button"
            onClick={() => calculate("*")}
          >
            *
          </button>
          <button
            type="button"
            className="button"
            onClick={() => calculate("/")}
          >
            /
          </button>
        </div>
        {/* Display status, error/success message, and result */}
        <div className="message-container">
          {status && (
            <div>
              {status === "Error!" ? (<p className="error">{status}</p>) : (<p className="success">{status}</p>)}
              {message  ? (<p>{message}</p>) : (<p>Result = {result}</p>)}
            </div>
          )}
        </div>
      </div>
      </div>
  );
}

export default App;
