import React, { useState } from "react";
import ListDisplay from "./ListDisplay";

const Main = () => {
  const [task, setTask] = useState("");
  const [category, setCategory] = useState("");
  const [list, setList] = useState([]);
  // state, setter

  const handleChange = (e) => {
    //task = e.target.value < bad to do
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log();
    setList([...list, { task: task, category: category }]);
    setTask("");
  };

  return (
    <div>
      <form action="" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="task"
          onChange={(e) => handleChange(e)}
          value={task}
        />
        <select onChange={(e) => setCategory(e.target.value)}>
          <option defaultValue disabled>
            Category
          </option>
          <option value="chores">Chores</option>
          <option value="errands">Errands</option>
          <option value="work">Work</option>
        </select>
        <button type="submit">Add</button>
      </form>
      <ListDisplay list={list} setList={setList} />
    </div>
  );
};

export default Main;
