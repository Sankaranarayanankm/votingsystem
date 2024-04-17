import React, { Fragment, useContext } from "react";
import voteContext from "../../context/context";
import Student from "./Student";

const Mentors = () => {
  const voteCtx = useContext(voteContext);
  let sureshStudents = voteCtx.items
    .filter((item) => item.mentor == "Suresh")
    .map((item, id) => <Student key={id} name={item.name} id={id} />);

  let deepankStudents = voteCtx.items
    .filter((item) => item.mentor == "Deepank")
    .map((item, id) => <Student key={id} name={item.name} id={id} />);

  let abhikStudents = voteCtx.items
    .filter((item) => item.mentor == "Abhik")
    .map((item, id) => <Student key={id} name={item.name} id={id} />);
  return (
    <Fragment>
      <div>
        <h2>Suresh</h2>
        <p>Total: {sureshStudents.length}</p>
        <ul>{sureshStudents}</ul>
      </div>
      <div>
        <h2>Deepank</h2>
        <p>Total: {deepankStudents.length}</p>
        {deepankStudents}
      </div>
      <div>
        <h2>Abhik</h2>
        <p>Total: {abhikStudents.length}</p>
        {abhikStudents}
      </div>
    </Fragment>
  );
};

export default Mentors;
