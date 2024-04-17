import React, { useContext, useState } from "react";
import Model from "../Model/Model";
import voteContext from "../../context/context";

const HeaderForm = (props) => {
  const [name, setName] = useState("");
  const [mentor, setMentor] = useState("Suresh");
  const voteCtx=useContext(voteContext);

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };
  const mentorHandler = (event) => {
    setMentor(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const details = {
      name,
      mentor,
    };
    // console.log(voteCtx)
    voteCtx.onAdd(details);
    props.onclick();
  };
  return (
    <Model>
      <form onSubmit={submitHandler}>
        <label htmlFor="name">Student Name: </label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          value={name}
        />
        <label>Choose Mentor: </label>
        <select onChange={mentorHandler} value={mentor}>
          <option>Suresh</option>
          <option>Deepank</option>
          <option>Abhik</option>
        </select>
        <button type="submit">Vote</button>
        <button type="button" onClick={props.onclick}>
          X
        </button>
      </form>
    </Model>
  );
};

export default HeaderForm;
