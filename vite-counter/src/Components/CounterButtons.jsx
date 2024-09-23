import React from 'react';

import { handleAdd, handleReduce } from '../Redux/action';
import { useDispatch } from 'react-redux';



const CounterButtons = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(handleAdd(1))}>ADD</button>
      <button onClick={() => dispatch(handleReduce(1))}>REDUCE</button>
    </div>
  );
};

export default CounterButtons;
