import React,{useState} from 'react'
import "./Key.css";
import {useDispatch,useSelector} from 'react-redux'
import {loadAns, loadBackspace, loadButtons, loadClear} from '../redux/calculatorRedux/calculator.actions'
//import {CALCULATOR_KEY} from '../redux/calculatorRedux/calculator.reducer'
const SignKey = () => {
    const dispatch = useDispatch()
    const [sign, setSigns] = useState(['+','-','*','/',])
  return (
    <div style={{width:"301px", }}>
         <div className='row' style={{marginLeft:"2px", fontWeight:"bold" , fontFamily:"initial", color:"red" , borderRadius:"3px"}}>
        
        {
          sign.map((ele)=>
          
          <div className='col-3 p-2 border  '>
         
            <span  onClick={()=>dispatch(loadButtons(ele))}>
              
              {ele}
            
             </span>
         
          </div>
            )
            
          
        }
        
        </div>
        
    </div>
  )
}

export default SignKey
