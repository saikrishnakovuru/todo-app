import './Test.css';
import {useEffect, useState} from "react";

export const RenderTestComponent = () => {
  const [count, setCount] = useState(0);

  const incrementP = incOrDec => setCount(count + incOrDec);


  const decrementP = (incOrDec) => {
    setCount(count - incOrDec);
  }

  const resetValues = () => {
    setCount(0);
  }

  return (
    <div>
      <span className="TestCounter">{count}</span>
      <TestComponent incOrDec={1} incrementP={incrementP} decrementP={decrementP} reset={resetValues}/>
      <TestComponent incOrDec={2} incrementP={incrementP} decrementP={decrementP} reset={resetValues}/>
      <TestComponent incOrDec={5} incrementP={incrementP} decrementP={decrementP} reset={resetValues}/>
      <button className={"resetButton"} onClick={resetValues}>Reset</button>
    </div>
  )
}

const TestComponent = ({incOrDec, incrementP, decrementP, reset}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(0);
  }, [reset]);

  const increment = () => {
    setCount(count + incOrDec);
    incrementP(incOrDec);
  }

  const decrement = () => {
    if (count !== 0)
      setCount(count - incOrDec);
    decrementP(incOrDec);
  }

  return (
    <div>
      <span className="TestCounter">{count}</span>
      <div>
        <button className="Button"
                onClick={increment}>
          +{incOrDec}

        </button>
        <button className="Button"
                onClick={decrement}>
          -{incOrDec}
        </button>
      </div>
    </div>
  )
}