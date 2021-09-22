import { useState } from 'react';
import '../../App.css';
import AddTaskBox from '../AddTaskBox/AddTaskBox'
import TaskList from '../TaskList/TaskList'

function ToDoList() {
  const [tasksList, setTasksList] = useState(
      [
        {id: '1632335597387', text: 'Task 1', done: false},
        {id: '1632335597389', text: 'Task 2', done: true}
      ]
    );
  function onTaskChange(e) {
    console.log(`Input changed checkbox: ${e.target.value}`);
  }

  const handleAddItem = addItem => {
		setTasksList([...tasksList, addItem]);
	};

  const markAllDone = () => {
    let tempList = [...tasksList];
    // let updatedTasks = [];
    // const updatedList = tasksList.map(item => ({
		// 	...item,
		// 	done: true
		// }));
    // setTasksList(updatedList);

    const tasksUpdated = tempList.map((singleTask, key) => {
      // let tempTask = { ...singleTask[key] };
      // tempTask.done = true;
      singleTask.done = true;
      // updatedTasks[key] = tempTask;
      return {...singleTask}
    });
    // console.log('tasksUpdated for marking all done');
    // console.log(tasksUpdated);
		setTasksList(tasksUpdated);
  };

  return (
    <div className="to-do-list">
      <AddTaskBox updateList={setTasksList} list={tasksList} handleAddItem={handleAddItem}/>
      <div className="to-do-list__mark-all-done">
        <button className="to-do-list__mark-all-done-btn" onClick={markAllDone}>
          Mark all done
        </button>
      </div>
      <TaskList list={tasksList} updatedTask={onTaskChange} updateList={setTasksList}/>
    </div>
  );
}

export default ToDoList;
