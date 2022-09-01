import React,{useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {loadAns, loadBackspace, loadButtons, loadClear} from '../redux/calculatorRedux/calculator.actions'
import {CALCULATOR_KEY} from '../redux/calculatorRedux/calculator.reducer'
import { connect } from "react-redux";
import Key from"./Key";

import SignKey from './SignKey';
import OtherKey from './OtherKey';
// import "./keypad.css"


const Keypad = () => {
    const dispatch = useDispatch()
    
    

   const viewCalculator = useSelector((state)=>{
      return state[CALCULATOR_KEY]
   })
  return (
    <div className='keyPad'>
      {/* <Key /> */}
      <div  className='row' style={{marginLeft:"2px", fontWeight:"bold" , fontFamily:"initial", color:"red" , borderRadius:"3px"}}>
     
     
     <Key/>
    <SignKey/>
    <OtherKey/>


      
      
      
      
      
      </div>
     



      
        
      
                   
</div>

  )
}
const mapStateToProps = (state) => {
  console.log("State",state);
    return {
        viewCalculator:state.CALCULATOR_KEY
    };
  };
  
  export default connect(mapStateToProps)(Keypad);
 
