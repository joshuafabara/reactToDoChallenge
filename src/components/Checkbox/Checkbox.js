import '../../App.css';
import React, { Fragment } from "react";

function Checkbox(props) {
  const onChange = props.onChange;
  const done = props.data.done;
  const id = props.data.id;
  const text = props.data.text;

  const taskDone = done === true ? 'Is Done' : 'NOT Done';

  console.log(`Props checkbox done: ${done}`);
  return (
    <Fragment>
      <label className="checkbox">
        {taskDone}
        <input
          className="checkbox__item"
          name={id}
          type="checkbox"
          defaultChecked={done}
          onChange={onChange}
        />
        <div className="checkbox__text">{text}</div>
      </label>
    </Fragment>
  );
}

export default Checkbox;
