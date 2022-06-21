import React, { useState, useEffect } from "react";
import ListDisplay from "./ListDisplay";
import { useFormik } from "formik";
import axios from "axios";

const Main = () => {
  // const [task, setTask] = useState("");
  const [allCategories, setAllCategories] = useState([]);
  const [list, setList] = useState([]);
  // state, setter

  // const handleChange = (e) => {
  //   //task = e.target.value < bad to do
  //   setTask(e.target.value);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log();
  //   setList([...list, { task, category }]);
  //   setTask("");
  // };

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/getCategories")
      .then((res) => setAllCategories(res.data));

    axios
      .get("http://localhost:4000/api/getAllTasks")
      .then((res) => setList(res.data));
  }, []);

  const catOptions = allCategories.map((cat, index) => {
    return <option value={cat.category_id}>{cat.title}</option>;
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      category: undefined,
    },
    onSubmit: (values) => {
      axios.post("http://localhost:4000/api/addTask", values).then((res) => {
        console.log(res.data);
      });
      console.log(values);
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit} id="item-form">
        <input
          name="name"
          type="text"
          placeholder="task"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <input
          name="description"
          type="text"
          placeholder="describe your task"
          onChange={formik.handleChange}
          value={formik.values.description}
        />
        <select
          name="category"
          value={formik.values.category}
          onChange={formik.handleChange}
        >
          <option defaultValue disabled>
            Category
          </option>
          {/* <option value="1">Errands</option>
          <option value="2">Chores</option>
          <option value="3">Personal</option>
          <option value="4">Work</option> */}
          {catOptions}
        </select>
        <button type="submit">Add</button>
      </form>
      <ListDisplay list={list} setList={setList} />
    </div>
  );
};

export default Main;
