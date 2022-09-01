import React from 'react'
import {GiHamburgerMenu} from "react-icons/gi";
import Keypad from './Keypad'
import Display from './Dispaly'
import Key from './Key';
import "./CalculatorApp.css";
const CalculatorApp = () => {
  return (
    <div className='calculator-App'>
      <section>
        <div className="container">
            <div className='burgerColor'>
                <GiHamburgerMenu/>
                <label className='Heading'>CalculatorApp</label>
             </div>
              <Display />
              <Keypad/>
     

         
        </div>
        </section>
      
    </div>
  )
}

export default CalculatorApp
