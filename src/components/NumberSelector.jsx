// import {useState} from 'react';
import './styles.css';
const NumberSelector = ({select,setSelect,error}) => {
    const arrNumber = [ 1,2,3,4,5,6];
    
  return (
    <div className='numbers'>
        <p className='error'>{error}</p>
        
        <div className='series'>
          {
              arrNumber.map((value,i) => (
                  <div
                  key={i} className='box' onClick={() => setSelect(value)}>{value}</div>
              ))
          }
        </div>
        
    </div>
  )
}

export default NumberSelector