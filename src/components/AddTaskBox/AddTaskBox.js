import '../../App.css';
// import logo from '../../logo.svg';
import React, { useRef } from 'react'

function AddTaskBox(props) {
  console.log('will render AddTaskBox');
  const newTask = useRef('');
  const uniqueTaskId = useRef(3);

  function addTask(e) {
    e.preventDefault();
    console.log('clicked add task');
    console.log(`new Task is: ${newTask.current}`);
    console.log(newTask.current);
    const newTaskObj = {id: uniqueTaskId.current, text: newTask.current, done: false};
    console.log('newTaskObject');
    console.log(newTaskObj);
    const updatedTasksList = [...props.list, newTaskObj]
    // let updatedTasksList = props.list;
    // updatedTasksList.push(newTaskObj);
    console.log('updated taskList');
    console.log(updatedTasksList);
    props.updateList(updatedTasksList);
    uniqueTaskId.current += 1;
    // props.updateTaskKey(props.taskKey + 1);
  }

  function changeNewTask(e) {
    e.preventDefault();
    console.log(e.target.value);
    // setNewTask(e.target.value);
    newTask.current = e.target.value;
  }

  return (
    <div className="add-task-box">
      <div className="add-task-box__container">
        <div className="add-task-box__input">
          <label htmlFor="task-text">Task:</label>
          <input type="text" id="task-text" name="task-text" onChange={changeNewTask}/>
        </div>
        <div className="add-task-box__button">
          <button type="button" onClick={addTask}>Add</button>
        </div>
      </div>
    </div>
  );
}

export default AddTaskBox;
