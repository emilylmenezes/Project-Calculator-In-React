import React, { useState } from "react";
import "./Calculator.css";
import Container from "@mui/material/Container";
import { Box } from "@mui/system";

export default function Calculator() {
  const [firstNumber, number] = useState(0);
  const [secondNumber, numberTwo] = useState(0);
  const [operator, operatorString] = useState();

 const numberInput = (event) => {
    let numberOfInput = event.target.value;
    if (firstNumber === 0) {
      number(numberOfInput);
    } else {
      number(firstNumber + numberOfInput);
    }
  };

  const clearAll = () => number(0);
  
  const porcentage = () => number(firstNumber / 100);
  
  const flag = () => firstNumber > 0 ? number(-firstNumber) : number(Math.abs(firstNumber));
  
  const operatorHandler = (event) => {
    operatorString(event.target.value);
    numberTwo(firstNumber);
    number(0);
  };

  const calculate = () => {
    if (operator === "/") {
      number((Number(secondNumber) / Number(firstNumber)).toFixed(2));
    } else if (operator === "X") {
      number((Number(secondNumber) * Number(firstNumber)).toFixed(2));
    } else if (operator === "-") {
      number((Number(secondNumber) - Number(firstNumber)).toFixed(2));
    } else if (operator === "+") {
      number((Number(secondNumber) + Number(firstNumber)).toFixed(2));
    }
  };

  return (
    <div>
      <Box m={5} />
      <Container maxWidth="xs">
        <div className="wrapper">
          <Box m={12} />
          <h1 className="calculateResult">{firstNumber}</h1>
          <button onClick={clearAll}>AC</button>
          <button onClick={flag}>+/-</button>
          <button onClick={porcentage}>%</button>
          <button className="orange" onClick={operatorHandler} value="/"> / </button>
          <button className="gray" onClick={numberInput} value={7}> 7 </button>
          <button className="gray" onClick={numberInput} value={8}> 8 </button>
          <button className="gray" onClick={numberInput} value={9}> 9 </button>

          <button className="orange" onClick={operatorHandler} value="X"> X </button>
          <button className="gray" onClick={numberInput} value={4}> 4 </button>
          <button className="gray" onClick={numberInput} value={5}> 5 </button>
          <button className="gray" onClick={numberInput} value={6}> 6 </button>

          <button className="orange" onClick={operatorHandler} value="-"> - </button>
          <button className="gray" onClick={numberInput} value={1}> 1 </button>
          <button className="gray" onClick={numberInput} value={2}> 2 </button>
          <button className="gray" onClick={numberInput} value={3}> 3 </button>

          <button className="orange" onClick={operatorHandler} value="+"> + </button>
          <button className="gray" onClick={numberInput} value={0}> 0 </button>
          <button className="gray" onClick={numberInput} value={"."}> , </button>
          <button className="gray" style={{ visibility: "hidden" }}> , </button>
          <button className="orange equal" onClick={calculate}> = </button>
        </div>
      </Container>
    </div>
  );
}