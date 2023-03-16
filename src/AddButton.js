import AddTaskForm from "./AddTaskForm";
import { useSelector, useDispatch } from "react-redux";
import { uiAction } from "./store/showAddForm-slice";
import styled from './AddButton.module.css'

const AddButton = () => {
  const dispatch = useDispatch();
  const showForm = useSelector((state) => state.ui.showTaskForm);
  const addFormHandler = () => {
    dispatch(uiAction.toggleAddTask());
  };
  return (
    <div className={styled.button}>
      <button className={styled.add} onClick={addFormHandler}>Add Task</button>
      {showForm && <AddTaskForm />}
    </div>
  );
};

export default AddButton;
