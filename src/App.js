import "./App.css";
import { Component } from "react";

function App() {
  return (
    <div className="App">
      My Todo Applictaion
      <MyFirstComponent></MyFirstComponent>
      <TestClassComponent />
    </div>
  );
}

function MyFirstComponent() {
  return (
    <div className="firstComponent">
      This is my First react Component(Function component)
    </div>
  );
}

class TestClassComponent extends Component {
  render() {
    return <div className="TestClassComponent">Testing class component</div>;
  }
}

export default App;
