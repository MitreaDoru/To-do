import { useDispatch } from "react-redux";
import { tasksAction } from "./store/tasks";
import styled from './DeleteButton.module.css'
const DeleteButton = (props) => {
  const dispatch = useDispatch();
  const deleteHandler = () => {
    dispatch(tasksAction.deleteTask(props.id));
  };
  return <button className={styled.delete} onClick={deleteHandler}>Delete task</button>;
};

export default DeleteButton;
