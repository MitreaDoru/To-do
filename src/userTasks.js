import Tasks from "./Tasks";
import styled from './userTasks.module.css'
function get(tasks) {
  return tasks.map((task) => (
    <li key={task.id}>
      <Tasks task={task} id={task.id} />
    </li>
  ));
}

const userTasks = {
  get,
};

export default userTasks;
