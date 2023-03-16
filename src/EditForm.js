import { tasksAction } from "./store/tasks";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import styled from './EditForm.module.css'

const EditForm = (props) => {
  const dispatch = useDispatch();
  const changeTitleHandler = (e) => {
    dispatch(tasksAction.newTitle(e.target.value));
  };
  const changeDescriptionHandler = (e) => {
    dispatch(tasksAction.newDescription(e.target.value));
  };
  const submitEditedTask = (e) => {
    e.preventDefault();
    dispatch(tasksAction.editTask({ id: props.id, title: titleForEdit, description: descriptionForEdit }));
  };

  let defaultValues;
  useSelector((state) =>
    state.tasksList.tasks.forEach((task) => {
      if (task.id === props.id) {
        defaultValues = { title: task.title, description: task.description };
      }
    })
  );
  const titleForEdit = defaultValues.title;
  const descriptionForEdit = defaultValues.description;
  return (
    <form className={styled.form} onSubmit={submitEditedTask}>
      <label htmlFor="title">Title</label>
      <input
        defaultValue={titleForEdit}
        onChange={changeTitleHandler}
        type="text"
        id="title"
      />
      <label htmlFor="description">Description</label>
      <input
        defaultValue={descriptionForEdit}
        onChange={changeDescriptionHandler}
        type="text"
        id="description"
      />
      <button type="submit">Confirm</button>
    </form>
  );
};

export default EditForm;
