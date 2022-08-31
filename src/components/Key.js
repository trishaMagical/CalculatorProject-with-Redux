import React,{useState} from 'react'
import "./Key.css";
import {useDispatch,useSelector} from 'react-redux'
import {loadAns, loadBackspace, loadButtons, loadClear} from '../redux/calculatorRedux/calculator.actions'
//import {CALCULATOR_KEY} from '../redux/calculatorRedux/calculator.reducer'
const Key = () => {
  const dispatch = useDispatch()
  const [numbers, setNumbers] = useState([1,2,3,4,5,6,7,8,9,0 ,'+','-','*','/'])
  
  return (
    <div className="flex-container" >
      
      {
        numbers.map((ele)=>
       
          <div className='keyBox' onClick={()=>dispatch(loadButtons(ele))}>{ele}</div>)
          
        
      }
     
       
      <div className='keyBox' onClick={()=>dispatch(loadClear())}>AC</div>
      <div className='keyBox' onClick={()=>dispatch(loadBackspace())}>C</div>
      <div className='keyBox' onClick={()=>dispatch(loadAns())}>=</div>
    </div>
  )
}

export default Key
