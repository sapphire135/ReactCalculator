import React, { useState } from "react";
import "./styles.css";

export default function App() {

  const [display, setDisplay] = useState('123')

  const onClickButton = (val) => {
    const isNumber = !isNaN(val) || val === '+' || val === '-'
    
    if (isNumber) {
      setDisplay(display + val)
    } else if (val === 'AC'){
      setDisplay('')
    } else if(val === '='){
      let tempArr
      let ans = display
      if(display.includes('+')){
        tempArr = display.split('+')
        ans = tempArr.reduce((acc, cur) => acc + JSON.parse(cur), 0)
      } else if(display.includes('-')){
        tempArr = display.split('-')
        ans = tempArr.reduce((acc, cur) => acc - JSON.parse(cur))
      }
      setDisplay(ans)
    }
  }

  function generateButton(val, cssClass) {
    cssClass = cssClass ? ('button ' + cssClass) : 'button'
    // console.log('cc', val)
    return <button className={cssClass} onClick={() => onClickButton(val)}>
      {val}
    </button>
  }

  return (
    <div className="App">
      <h1>Calculator</h1>
      <div className='calc'>
        <div className='row1 display'>
          {display}
        </div>
        <div className='row1'>
          {generateButton('AC')}
          {generateButton('+/-')}
          {generateButton('%')}
          {generateButton('/', 'lastButton')}
        </div>
        <div className='row1'>
          {generateButton(7)}
          {generateButton(8)}
          {generateButton(9)}
          {generateButton('*', 'lastButton')}
        </div>
        <div className='row1'>
          {generateButton(4)}
          {generateButton(5)}
          {generateButton(6)}
          {generateButton('-', 'lastButton')}
        </div>
        <div className='row1'>
          {generateButton(1)}
          {generateButton(2)}
          {generateButton(3)}
          {generateButton('+', 'lastButton')}
        </div>
        <div className='row1'>
          {generateButton('0', 'zeroClass')}
          {generateButton('.')}
          {generateButton('=', 'lastButton')}
        </div>
      </div>
    </div>
  );
}

