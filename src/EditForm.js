import { tasksAction } from "./store/tasks";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import styled from './EditForm.module.css'

const EditForm = (props) => {
  const dispatch = useDispatch();
  let editTitle = '';
  let editDescription = '';
  const changeTitleHandler = (e) => {
    editTitle = e.target.value
    dispatch(tasksAction.newTitle(e.target.value));
  };
  const changeDescriptionHandler = (e) => {
    editDescription = e.target.value
    dispatch(tasksAction.newDescription(e.target.value));
  };
  const submitEditedTask = (e) => {
    e.preventDefault();
    dispatch(tasksAction.editTask({ id: props.id, title: editTitle ? editTitle : titleForEdit, description: editDescription ? editDescription : descriptionForEdit }));
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
