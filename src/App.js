import "./App.css";
import {Component} from "react";
import FirstComponent from "./components/learning-examples/FirstComponent";

function App() {
  return (
    <div className="App">
      My Todo Applications
      <FirstComponent/>
      <TestClassComponent/>
    </div>
  );
}

class TestClassComponent extends Component {
  render() {
    return <div className="TestClassComponent">Testing class component</div>;
  }
}

export default App;
