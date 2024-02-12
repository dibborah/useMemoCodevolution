import { useState, useMemo } from "react";

const Counter = () => {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const IncrementOne = () => {
    setCounterOne(counterOne + 1);
  };
  const isEven = useMemo(() => {
    let i = 0
    while(i<2000000000)i++;
    return counterOne % 2 === 0;
  }, [counterOne]);

  const IncrementTwo = () => {
    setCounterTwo(counterTwo + 1);
  };
  return (
    <div>
      <div style={{margin:"1rem"}}>
        <button onClick={IncrementOne}>Counter One : {counterOne}</button>
        <span>{isEven ? 'Even' : 'Odd'}</span>
      </div>
      <div>
        <button onClick={IncrementTwo}>Counter One : {counterTwo}</button>
      </div>
    </div>
  );
};

export default Counter;
