import React, { useState } from "react";
import "../../src/App.css";

const Item = ({ task, index, setList, list }) => {
  console.log(task);
  const [isChecked, setIsChecked] = useState(false);

  const handleDelete = (id) => {
    list.splice(id, 1);
    setList([...list]);
  };
  return (
    <div className="item">
      <h3
        onClick={() => setIsChecked(!isChecked)}
        className={isChecked ? "completed" : null}
      >
        {task.task_name}
      </h3>
      <h5>{task.title}</h5>
      <h3 onClick={() => handleDelete(index)}>x</h3>
    </div>
  );
};

export default Item;
