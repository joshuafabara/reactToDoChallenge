import { useState } from 'react';
import '../../App.css';
// import logo from '../../logo.svg';
import AddTaskBox from '../AddTaskBox/AddTaskBox'
import TaskList from '../TaskList/TaskList'

function ToDoList() {
  const [tasksList, setTasksList] = useState(
      [
        {id: 1, text: "Task 1", done: false},
        {id: 2, text:"Task 2", done: true}
      ]
    );
  function onTaskChange(e) {
    console.log(`Input changed checkbox: ${e.target.value}`);
  }

  const handleAddItem = addItem => {
		setTasksList([...tasksList, addItem]);
	};
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
      <AddTaskBox updateList={setTasksList} list={tasksList} handleAddItem={handleAddItem}/>
      <TaskList list={tasksList} updatedTask={onTaskChange} updateList={setTasksList}/>
    </div>
  );
}

export default ToDoList;
