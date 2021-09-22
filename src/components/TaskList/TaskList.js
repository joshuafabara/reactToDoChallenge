import '../../App.css';
// import logo from '../../logo.svg';
// import Task from '../Task/Task'
import Checkbox from '../Checkbox/Checkbox';
import React, { useEffect } from 'react';

function TaskList(props) {
  const { list, updateList } = props;

  const onChangeStatus = e => {
		const { name, checked } = e.target
    console.log(`name: ${name}, checked: ${checked}`);

		// const updatedList = list.map(item => ({
		// 	...item,
		// 	done: item.id === name ? checked : item.done
		// }));
    // updateList(updateList);
    let tempList = [...list];
    console.log('tempList before changing checkbox');
    console.log(tempList);
    // const taskKey = tempList.map((singleTask, key) => {
    //   console.log('singleTask');
    //   console.log(singleTask);
    //   console.log('key');
    //   console.log(key);
    //   if ((singleTask.id) === name) {
    //     console.log(`This is the chosen one: ${key}`);
    //     return name;
    //   }
    // });
    // console.log(`taskKey: ${taskKey}`);
    const updatedTaskKey = tempList.findIndex(task => task.id === name);
    console.log(`indiex of changed element: ${updatedTaskKey}`);
    let tempTask = { ...tempList[updatedTaskKey] };
    tempTask.done ? tempTask.done = false: tempTask.done = true;
    tempList[updatedTaskKey] = tempTask;
		updateList(tempList);
	};

  const deleteAllDone = () => {
    console.log('gonaa clean this up');
    // console.log(`updateList initial state before deleting done`);
    // console.log(updateList);
    let tempList = [...list];
    let tempToDoTasks = tempList.filter(task => task.done === false);
    // let tempTask = { ...tempList[updatedTaskKey] };
    updateList(tempToDoTasks);
    // const updatedList = list.filter(task => !task.done);
		// updateList(updatedList);
  }

  const tasksItems = props.list.map((singleTask) =>
    // <Task key={singleTask.id} taskObj={singleTask} updatedTask={props.updatedTask} list={props.list} updateList={props.updateList}/>
    <Checkbox key={singleTask.id} data={singleTask} onChange={onChangeStatus}/>
  );

  useEffect(() => {
    console.log(`updateList final state after changing checkboxes`);
    console.log(list);
  });

  return (
    <div className="task-list">
      <div className="task-list__container">
        <ul className="task-list__ul">
          {list.length ? tasksItems : "No tasks"}
        </ul>
      </div>
      {list.length ? (
        <div className="task-list__delete-container">
					<button className="task-list__delete-btn" onClick={deleteAllDone}>
						Delete all done
					</button>
        </div>
			) : null}
    </div>
  );
}

export default TaskList;
