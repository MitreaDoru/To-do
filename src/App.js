import "./index.css";
import userTasks from "./userTasks";
import AddButton from "./AddButton";
import { useSelector } from "react-redux";
import styled from "./App.module.css"

const App = () => {
  // render task
  const tasks = useSelector((state) => state.tasksList.tasks);
  const renderTasks = userTasks.get(tasks);
  return (
    <div>
      <div>
        <AddButton />
      </div>
      <ul className={styled.list}>{renderTasks}</ul>
    </div>
  );
};

export default App;