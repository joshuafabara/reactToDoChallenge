import { useState } from 'react';
import '../../App.css';
// import logo from '../../logo.svg';
import AddTaskBox from '../AddTaskBox/AddTaskBox'
import TaskList from '../TaskList/TaskList'

function ToDoList() {
  console.log('will render ToDoList');
  const [tasksList, setTasksList] = useState(
      [
        {id: 1, text: "Tarea 1", done: false},
        {id: 2, text:"Tarea 2", done: true}
      ]
    );
  function onTaskChange(e) {
    console.log(`I put changed checkbox: ${e.target.value}`);
  }
  // const [taskId, setTaskId] = useState(3);
  // function addTaskDummy(e) {
  //   e.preventDefault();
  //   console.log('clicked dummy button');
  //   const newTaskObj = {id: taskId, text: "Dummy task"};
  //   let updatedTasksList = tasksList;
  //   updatedTasksList.push(newTaskObj);
  //   console.log('updated taskList');
  //   console.log(updatedTasksList);
  //   setTasksList((updatedTasksList) => updatedTasksList);
  //   setTaskId(taskId + 1);
  // }
  return (
    <div className="to-do-list">
      <AddTaskBox updateList={setTasksList} list={tasksList}/>
      <TaskList list={tasksList} updatedTask={onTaskChange}/>
      {/* <button type="button" onClick={addTaskDummy}>Dummy Add</button> */}
    </div>
  );
}

export default ToDoList;
