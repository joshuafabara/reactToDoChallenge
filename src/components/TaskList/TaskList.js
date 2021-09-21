import '../../App.css';
// import logo from '../../logo.svg';
import Task from '../Task/Task'

function TaskList(props) {
  console.log('will render TaskList');
  const tasksItems = props.list.map((singleTask) =>
    <Task key={singleTask.id} taskObj={singleTask} updatedTask={props.updatedTask}/>
  );
  return (
    <div className="task-list">
      <div className="task-list__container">
        <ul className="task-list__ul">
          {tasksItems}
        </ul>
      </div>
    </div>
  );
}

export default TaskList;
