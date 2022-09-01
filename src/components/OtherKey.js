import React, { useState } from 'react'
import "./Key.css";
import { useDispatch, useSelector } from 'react-redux'
import { loadAns, loadBackspace, loadClear } from '../redux/calculatorRedux/calculator.actions'
const OtherKey = () => {
    const dispatch = useDispatch()
    return (
        <div style={{ width: "301px", }}>
            <div className='row' style={{ marginLeft: "2px", fontWeight: "bold", fontFamily: "initial", color: "red", borderRadius: "3px" }}>
                <div className='col-6 p-2 border ' onClick={() => dispatch(loadClear())}>AC</div>
                <div className='col-6 p-2 border ' onClick={() => dispatch(loadBackspace())}>C</div>
               
            </div>
        </div>


    )
}

export default OtherKey
