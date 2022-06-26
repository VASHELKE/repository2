import React from 'react';
import { increment,decrement } from '../store/actions/CounterActions';

import { useDispatch, useSelector } from 'react-redux';

function Counter() {

    const counter1 = useSelector(state => state.counterReducer.counter);
    const dispatch = useDispatch()

    const incrementByOne = () => {
        dispatch(increment())
    }
    const decrementByOne = () => {
        dispatch(decrement())
    }
    return (
        <div>
            <h2>Counter: {counter1}</h2>
            <button onClick={incrementByOne}>+</button> <button onClick={decrementByOne}>-</button>
        </div>
    )
}
export default Counter;