import React from 'react';
import "./CalculatorApp.css";


import {useDispatch,useSelector} from 'react-redux'

import {CALCULATOR_KEY} from '../redux/calculatorRedux/calculator.reducer'

import { connect } from "react-redux";

const Display = () => {
   const dispatch = useDispatch()

   const viewCalculator = useSelector((state)=>{
    return state[CALCULATOR_KEY]
    })
  return (
    <React.Fragment>
      {/* <pre>{JSON.stringify(viewCalculator)}</pre> */}
      <div className="">
                <input 
                  type="text"
                  placeholder='0'
                  className='inputBox'
                  value={(viewCalculator.ans).length===0? viewCalculator.number : viewCalculator.ans}
                />
      </div>
        
     </React.Fragment>
  )
}
const mapStateToProps = (state) => {
   return {
       viewCalculator:state.CALCULATOR_KEY
   };
 };
 export default connect(mapStateToProps)(Display);

