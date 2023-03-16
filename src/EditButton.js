import { tasksAction } from "./store/tasks";
import { useDispatch } from "react-redux";
import styled from './EditButton.module.css'
const EditButton = (props) => {
  const dispatch = useDispatch();
  const editTaskHandler = () => {
    dispatch(tasksAction.toggleEditTask(props.id));
  };
  return <button className={styled.edit} onClick={editTaskHandler}>Edit task</button>;
};

export default EditButton;
