import { useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { saveTaskToRedux } from "./redux/reducer";

function App() {
  const [input, setInput] = useState();
  const statex = useSelector((state) => state);
  const dispatch = useDispatch();

  const changeHandler = (e) => {
    setInput(e.target.value);
  };

  const saveToRedux = () => {
    dispatch(saveTaskToRedux(input));
    console.log("function is called");
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Tasks</h1>
        <input value={input} onChange={changeHandler}></input>
        <button onClick={saveToRedux}>Save Task</button>
        {statex.tasks.map((task) => (
          <h5>{task}</h5>
        ))}
      </header>
    </div>
  );
}

export default App;
