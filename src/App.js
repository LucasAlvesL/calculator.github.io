import { useState } from 'react';
import './teste.css'

function App() {

  const [num, setNum] = useState(0)
  const [oldnum, setOldNum] = useState(0)
  const [operator, setOperator] = useState()

  const inputNum = e => {
    let input = e.target.value
    if(num === 0){
      setNum(input)
    } else {
      setNum(num + input)
    }
  }

  const operatorHandler = e => {
    let operatorInput = e.target.value
    setOperator(operatorInput)
    setOldNum(num)
    setNum(0)
  }

  const calculate = _ => {
    if(operator === "/") {
      setNum(parseFloat(oldnum) / parseFloat(num))
    } else if (operator === 'x'){
      setNum(parseFloat(oldnum) * parseFloat(num))
    } else if (operator === '+'){
      setNum(parseFloat(oldnum) + parseFloat(num))
    } else if (operator === '-'){
      setNum(parseFloat(oldnum) - parseFloat(num))
    }
  }

  const delNum = _ => {
    if(num === '') {
      return
    }

    const value = num.slice(0, -1)
    setNum(value)
  }

  const clearMemory = _ => {
    setNum(0)
  }

  return (
    <div className='container'>
      <h1>Calculator</h1>
      <div className="numberInput">{num}</div>
      <section className='parent'>
        <button class="calcBtn" onClick={inputNum} value={7}>7</button>
        <button class="calcBtn" onClick={inputNum} value={8}>8</button>
        <button class="calcBtn" onClick={inputNum} value={9}>9</button>
        <button class="calcBtn" onClick={delNum}id="del">del</button>
        <button class="calcBtn" onClick={inputNum} value={4}>4</button>
        <button class="calcBtn" onClick={inputNum} value={5}>5</button>
        <button class="calcBtn" onClick={inputNum} value={6}>6</button>
        <button class="calcBtn" onClick={operatorHandler} value="+">+</button>
        <button class="calcBtn" onClick={inputNum} value={1}>1</button>
        <button class="calcBtn" onClick={inputNum} value={2}>2</button>
        <button class="calcBtn" onClick={inputNum} value={3}>3</button>
        <button class="calcBtn" onClick={operatorHandler} value="-">-</button>
        <button class="calcBtn" onClick={inputNum} value=".">.</button>
        <button class="calcBtn" onClick={inputNum} value={0}>0</button>
        <button class="calcBtn" onClick={operatorHandler} value="/">/</button>
        <button class="calcBtn" onClick={operatorHandler} value="x">x</button>
        <button class="calcBtn" onClick={clearMemory}id="reset">reset</button>
        <button class="calcBtn" onClick={calculate}id="igual">=</button>
      </section>
    </div>
  );
}

export default App;
