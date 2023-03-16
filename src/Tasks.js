import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";
import { useSelector } from "react-redux";
import EditForm from "./EditForm";
import styled from './Task.module.css'
const Tasks = (props) => {
  let showEdit;
  useSelector((state) =>
    state.tasksList.tasks.forEach((task) => {
      if (task.id === props.id) {
        showEdit = task.showEdit;
      }
    })
  );

  return (
    <div className={styled.task}>
      <EditButton id={props.id} />
      <DeleteButton id={props.id} />
      {showEdit && <EditForm id={props.id} />}
      <h1>{props.task.title}</h1>
      <p>{props.task.description}</p>
    </div>
  );
};

export default Tasks;
