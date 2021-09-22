// import '../../App.css';
// // import logo from '../../logo.svg';

// function Task(props) {
//   console.log('will render Task');
//   function taskChanged(e) {
//     e.preventDefault();
//     console.log('on change inside same component Task');
//     // props.updatedTask(e);
//     console.log(e.target.value);
//     let tempList = [...props.list];
//     console.log(`tempList`);
//     console.log(tempList);
//     // var changedTask = tempList.filter(obj => {
//     //   return obj.id === e.target.value
//     // });
//     // let changedTask = tempList.filter(task => task.id === parseInt(e.target.value));
//     // changedTask = changedTask[0];
//     // console.log('changedTask Obj before change');
//     // console.log(changedTask);
//     // changedTask.done ? changedTask.done = false: changedTask.done = true;
//     // const updatedTaskKey = getKeyByValue(tempList, changedTask);
//     const updatedTaskKey = tempList.findIndex(task => task.id === parseInt(e.target.value));
//     let tempTask = { ...tempList[updatedTaskKey] };
//     console.log('tempTask Obj before change');
//     console.log(tempTask);
//     tempTask.done ? tempTask.done = 0: tempTask.done = 1;
//     console.log('tempTask Obj after change');
//     console.log(tempTask);
//     console.log(`Here is the key:`);
//     console.log(updatedTaskKey);
//     tempList[updatedTaskKey] = tempTask;
//     // tempList[updatedTaskKey] = changedTask;
//     props.updateList(tempList);
//     // console.log('Updated tempList');
//     // console.log(tempList);
//   }

//   // let input = '';

//   // if (props.taskObj.done) {
//   //   input = <input type="checkbox" onChange={taskChanged} checked={true} id={`task${props.taskObj.id}`} name={`task${props.taskObj.id}`} value={props.taskObj.id}/>;
//   // } else {
//   //   input = <input type="checkbox" onChange={taskChanged} id={`task${props.taskObj.id}`} name={`task${props.taskObj.id}`} value={props.taskObj.id}/>;
//   // }

//   return (
//     <li key={props.taskObj.id} className="task">
//       <div key={props.taskObj.id} className="task__text">
//         Is checked? <span>{props.taskObj.done}</span>
//         {/* {input} */}
//         {/* <input type="checkbox" onChange={taskChanged} checked={props.taskObj.done} id={`task${props.taskObj.id}`} name={`task${props.taskObj.id}`} value={props.taskObj.id}/> */}
//         {/* <input
//           className=""
//           name={`task${props.taskObj.id}`}
//           type="checkbox"
//           defaultChecked={props.taskObj.done}
//           onChange={taskChanged}
//           value={props.taskObj.id}
//         /> */}
//         {/* <label htmlFor={`task${props.taskObj.id}`}>{props.taskObj.text}</label> */}
//       </div>
//     </li>
//   );
// }

// export default Task;
