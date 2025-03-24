import React, { useState } from 'react'
 
const Card = () => {
    const [count, setCount ] = useState(0);
 
    const counterdecrement = () => {
        setCount((num) => num - 1)
    }
    const counterincrement = () => {
        setCount((num) => num + 1)
    }
  return (
    <>
    <div className="grid-container">
            <div className="grid-item">
            <div className="header">
                <b>Counter component - Use State</b>
            </div>
            <br/><br/>
                <div className='counter-component'>
                        { count > 10 && (
                            <><p>Value is greater than 10</p></>
                        )}
                        { count < 0 && (
                            <><p>Value is lesser than 0</p></>
                        )}
                        <div className={`counter-body mb-3 ${count > 10 ? "bg-success" : ""} ${count < 0 ? "bg-danger" : ""} `}>{count}</div>
                        <button className='btn btn-primary'
                        onClick={counterdecrement}
                        >-</button>
                        <button className='btn btn-primary mx-3'
                        onClick={counterincrement}
                        >+</button>
                </div>
           </div>
    </div>
    </>
  )
}
 
export default Card