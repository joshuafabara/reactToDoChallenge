import '../../App.css';
// import logo from '../../logo.svg';
import React, { useState } from 'react'

function AddTaskBox(props) {
  const { handleAddItem } = props;
  const [newTask, setNewTask] = useState('');

  const handleSubmit = e => {
		e.preventDefault();
		handleAddItem({
			id: (+new Date()).toString(),
			text: newTask,
			done: false
		});
		setNewTask('');
	};

  return (
    <div className="add-task-box">
      <form onSubmit={handleSubmit}>
        <div className="add-task-box__container">
          <div className="add-task-box__input">
            <label htmlFor="task-text">Task:</label>
            <input 
              type="text" 
              id="task-text" 
              name="task-text" 
              value={newTask}
              onChange={e => setNewTask(e.target.value)}
            />
          </div>
          <div className="add-task-box__button">
            <button type="button" onClick={handleSubmit} disabled={newTask ? "" : "disabled"}>Add</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddTaskBox;
