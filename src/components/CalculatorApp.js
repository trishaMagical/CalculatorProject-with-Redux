import React from 'react';
import "./CalculatorApp.css";
import {GiHamburgerMenu} from "react-icons/gi";
import {useDispatch,useSelector} from 'react-redux'
import {loadAns, loadBackspace, loadButtons, loadClear} from '../redux/calculatorRedux/calculator.actions'
import {CALCULATOR_KEY} from '../redux/calculatorRedux/calculator.reducer'

const CalculatorApp = () => {
   const dispatch = useDispatch()

   const viewCalculator = useSelector((state)=>{
      return state[CALCULATOR_KEY]
   })
  return (
    <React.Fragment>
      {/* <pre>{JSON.stringify(viewCalculator)}</pre> */}
        <section>
        <div className="calculator-App">
            <div className='burgerColor'>
                <GiHamburgerMenu/>
                <label className='Heading'>CalculatorApp</label>
             </div>
             
             <div className="">
                <input 
                  type="text"
                  placeholder='0'
                  className='inputBox'
                  value={(viewCalculator.ans).length===0? viewCalculator.number : viewCalculator.ans}
                />
             </div>
                <div className='keyPad'>
                    <button onClick={()=>dispatch(loadButtons(1))}>1</button>
                    <button onClick={()=>dispatch(loadButtons(2))}>2</button>
                    <button onClick={()=>dispatch(loadButtons(3))}>3</button>
                    <button onClick={()=>dispatch(loadButtons(4))}>4</button>
                    <button onClick={()=>dispatch(loadButtons(5))}>5</button>
                    <button onClick={()=>dispatch(loadButtons(6))}>6</button>
                    <button onClick={()=>dispatch(loadButtons(7))}>7</button>
                    <button onClick={()=>dispatch(loadButtons(8))}>8</button>
                    <button onClick={()=>dispatch(loadButtons(9))}>9</button>
                    <button onClick={()=>dispatch(loadButtons(0))}>0</button>
                    <button onClick={()=>dispatch(loadButtons('+'))}>+</button>
                    <button onClick={()=>dispatch(loadButtons('-'))}>-</button>
                    <button onClick={()=>dispatch(loadButtons('*'))}>*</button>
                    <button onClick={()=>dispatch(loadButtons('/'))}>/</button>
                    <button onClick={()=>dispatch(loadClear())}>AC</button>
                    <button onClick={()=>dispatch(loadBackspace())}>C</button>
                    <button onClick={()=>dispatch(loadAns())}>=</button>
                </div>
          
        </div>
        </section>
        
     </React.Fragment>
  )
}

export default CalculatorApp
