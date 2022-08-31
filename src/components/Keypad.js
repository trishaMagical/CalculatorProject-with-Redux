import React,{useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {loadAns, loadBackspace, loadButtons, loadClear} from '../redux/calculatorRedux/calculator.actions'
//import {CALCULATOR_KEY} from '../redux/calculatorRedux/calculator.reducer'
import { connect } from "react-redux";
import Key from"./Key";


const Buttons = () => {
    const dispatch = useDispatch()
    const [numbers, setNumbers] = useState([1,2,3,4,5,6,7,8,9,0 ,'+','-','*','/'])
    

//    const viewCalculator = useSelector((state)=>{
//       return state[CALCULATOR_KEY]
//    })
  return (
    <div className='keyPad'>
      <Key />

      {/* {
        numbers.map((ele)=>{ 
          return(
          <button onClick={()=>dispatch(loadButtons(ele))}>{ele}</button>)
        })
      } */}
        
      
                    {/* <button onClick={()=>dispatch(loadButtons(1))}>1</button>
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
                    <button onClick={()=>dispatch(loadButtons('/'))}>/</button> */}
    {/* <button onClick={()=>dispatch(loadClear())}>AC</button>
    <button onClick={()=>dispatch(loadBackspace())}>C</button>
    <button onClick={()=>dispatch(loadAns())}>=</button> */}
</div>

  )
}
const mapStateToProps = (state) => {
    return {
        viewCalculator:state.CALCULATOR_KEY
    };
  };
  
  export default connect(mapStateToProps)(Buttons);
 
