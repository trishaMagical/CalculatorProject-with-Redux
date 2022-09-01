import React,{useState} from 'react'
 import "./Key.css";
import {useDispatch,useSelector} from 'react-redux'
import {loadAns, loadBackspace, loadButtons, loadClear} from '../redux/calculatorRedux/calculator.actions'
//import {CALCULATOR_KEY} from '../redux/calculatorRedux/calculator.reducer'
const Key = () => {
  const dispatch = useDispatch()
  const [numbers, setNumbers] = useState([1,2,3,4,5,6,7,8,9,0,".","=" ])
  
  return (
    <div style={{width:"301px", }}>
      <div className='row' style={{marginLeft:"2px", fontWeight:"bold" , fontFamily:"initial", color:"red" , borderRadius:"3px"}}>
        
      {
        numbers.map((ele)=>
        
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

export default Key
