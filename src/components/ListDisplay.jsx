import React, { useState } from "react";
import Item from "./Item";

const ListDisplay = (props) => {
  const { list, setList } = props;
  const [selected, setSelected] = useState("");

  const listMapped = list
    .filter((item) => {
      if (selected) return item.category === selected;
      return item;
    })
    .map((task, index) => {
      return (
        <Item
          key={index}
          task={task}
          index={index}
          setList={setList}
          list={list}
        />
      );
    });

  return (
    <div>
      <select onChange={(e) => setSelected(e.target.value)}>
        <option defaultValue selected></option>
        <option value="chores">Chores</option>
        <option value="errands">Errands</option>
        <option value="work">Work</option>
      </select>
      {listMapped}
    </div>
  );
};

export default ListDisplay;
