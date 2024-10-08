
import React from 'react';
import { useSelector } from 'react-redux';

const CounterValue = () => {
  const count = useSelector((state) => state.counter.count);

  return <div>{count}</div>;
};

export default CounterValue;
