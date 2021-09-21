import '../../App.css';
// import logo from '../../logo.svg';

function Task(props) {
  console.log('will render Task');
  function taskChanged(e) {
    // e.preventDefault();
    console.log('on change inside same component Task');
    props.updatedTask(e);
  }
  return (
    <li key={props.taskObj.id} className="task">
      <div key={props.taskObj.id} className="task__text">
        <input type="checkbox" onChange={taskChanged} checked={props.taskObj.done} id="task{props.taskObj.id}" name="task{props.taskObj.id}" value={props.taskObj.id}/>
        <label htmlFor="task{props.taskObj.id}">{props.taskObj.text}</label>
      </div>
    </li>
  );
}

export default Task;
