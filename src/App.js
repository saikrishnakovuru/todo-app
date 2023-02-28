import "./App.css";
import {TodoApp} from "./components/todo/TodoApp";

function App() {

  return (
    <div className="App">
      {/*<Counter incOrDecValue={1}/>*/}
      {/*<Counter incOrDecValue={2}/>*/}
      {/*<Counter incOrDecValue={5}/>*/}
      {/*<TestComponent/>*/}
      {/*<RenderTestComponent/>*/}
      <TodoApp/>
    </div>
  );
}

// let testFunction = () => {
//   console.log("testing");
// }
// const one = () => console.log("function one");
// function two() {
//   return console.log("second function");
// }
// one();
// two();

// testFunction();
export default App;
