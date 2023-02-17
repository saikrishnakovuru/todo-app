import './Counter.css'

export const Counter = () => {
  // const buttonStyle = {
  //   fontSize: "15px",
  //   backgroundColor: "#00a5ab",
  //   width: "100px",
  //   margin: "10px",
  //   color: "white",
  //   padding: "15px",
  //   borderRadius: "30px"
  // };

  const incrementCounterFunction = () => {
    console.log("button clicked");
  }

  return (<div className='Counter'>
    <span className="count">0</span>
    <div>
      <button className="counterButton"
              onClick={incrementCounterFunction}
      >+1
      </button>
    </div>
  </div>);
}