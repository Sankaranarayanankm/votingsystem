import React, { useContext } from "react";
import voteContext from "../../context/context";

const Student = (props) => {
const voteCtx=useContext(voteContext);
const removeVoteHandler=id=>{
  voteCtx.onRemove(id);
}
  return (
    <li>
      {props.name}
      <button onClick={()=>removeVoteHandler(props.id)} >delete</button>
    </li>
  );
};

export default Student;
