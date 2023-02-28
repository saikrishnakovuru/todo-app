import './Counter.css';
import {useState} from "react";
import PropTypes from "prop-types";

export const TestCounter = () => {
  const [count, setCount] = useState(0);

  const incrementCounterParentFunction = (incOrDecValue) => {
    setCount(preCount => preCount + incOrDecValue)
  }

  const decrementCounterParentFunction = (incOrDecValue) => {
    setCount(count - incOrDecValue)
  }

  return (
    <div>
      <span className="count">{count}</span>
      <Counter incOrDecValue={1} increment={incrementCounterParentFunction} decrement={decrementCounterParentFunction}/>
      <Counter incOrDecValue={2} increment={incrementCounterParentFunction} decrement={decrementCounterParentFunction}/>
      <Counter incOrDecValue={5} increment={incrementCounterParentFunction} decrement={decrementCounterParentFunction}/>
      <button className="resetButton">Reset</button>
    </div>
  )
}

const Counter = ({incOrDecValue,increment,decrement}) => {
  const [count, setCount] = useState(0);

  const incrementCounterFunction = () => {
    setCount(count + incOrDecValue);
    increment(incOrDecValue)
  }
  const decrementCounterFunction = () => {
    if (count !== 0) {
      setCount(count - incOrDecValue);
    decrement(incOrDecValue)
    }
  }
  return (
    <div className='Counter'>
      <span className="count">{count}</span>
      <div>
        <button className="counterButton"
                onClick={incrementCounterFunction}>
          +{incOrDecValue}
        </button>
        <button className="counterButton"
                onClick={decrementCounterFunction}>
          -{incOrDecValue}
        </button>
      </div>
    </div>
  );
}

Counter.asdf = {
  incOrDecValue: PropTypes.number
}