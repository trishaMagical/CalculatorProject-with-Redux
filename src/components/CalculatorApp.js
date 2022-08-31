import React from 'react'
import {GiHamburgerMenu} from "react-icons/gi";
import Keypad from './Keypad'
import Display from './Dispaly'
import Key from './Key'
const CalculatorApp = () => {
  return (
    <div>
      <section>
        <div className="calculator-App">
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
