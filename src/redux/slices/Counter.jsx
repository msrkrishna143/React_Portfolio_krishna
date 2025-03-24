import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    decrement,
    increment,
    incrementByAmount,
    incrementAsync,
    selectCount,
} from './counterSlice';
import styles from './Counter.module.css';

export function ReduxCounter() {
    const count = useSelector(selectCount);
    const dispatch = useDispatch();
    const [incrementAmount, setIncrementAmount] = useState('2');

    return (
        <div>
            <div className="grid-container">
                <div className="grid-item">
                <div className="header">
                        <b>Redux Counter component - Use State</b>
                         <br/><br/>
                </div>
                    <div className={styles.row}>
                        <button
                            className={styles.button}
                            aria-label="Increment value"
                            onClick={() => dispatch(increment())}
                        >
                            +
                        </button>
                        <span className={styles.value}>{count}</span>
                        <button
                            className={styles.button}
                            aria-label="Decrement value"
                            onClick={() => dispatch(decrement())}
                        >
                            -
                        </button>
                    </div>
                    <div className="input-container">
                        <input
                            type="text"
                           
                            value={incrementAmount}
                            onChange={e => setIncrementAmount(e.target.value)}
                        />
                        <button
                            
                            onClick={() =>
                                dispatch(incrementByAmount(Number(incrementAmount) || 0))
                            }
                        >
                            Add Amount
                        </button>
                        <button
                            
                            onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
                        >
                            Add Async
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
