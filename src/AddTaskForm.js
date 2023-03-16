import { useDispatch } from "react-redux";
import { tasksAction } from "./store/tasks";
import { uiAction } from "./store/showAddForm-slice";
import styled from './AddTaskForm.module.css'
const AddTaskForm = () => {
  const dispatch = useDispatch();
  let newTitle = '';
  let newDescription = '';

  const changeTitleHandler = (e) => {
    newTitle = e.target.value

  };
  const changeDescriptionHandler = (e) => {
    newDescription = e.target.value

  };
  const submitNewTask = (e) => {
    e.preventDefault();
    dispatch(tasksAction.addTask({ title: newTitle, description: newDescription }));
    dispatch(uiAction.toggleAddTask());
  };
  return (
    <form className={styled.form} onSubmit={submitNewTask}>
      <div className={styled.title}>
        <label htmlFor="title">Title</label>
        <input onChange={changeTitleHandler} type="text" id="title" />
      </div>
      <div className={styled.description}>
        <label htmlFor="description">Description</label>
        <input onChange={changeDescriptionHandler} type="text" id="description" />
      </div>
      <button className={styled.confirm} type="submit">Confirm</button>
    </form>
  );
};

export default AddTaskForm;
