import React, { Fragment } from "react";
import ReactDOM from 'react-dom';
import './Model.css';

const Backdrop=()=>{
  return <div className="backdrop"/>
}

const Overlay=(props)=>{
  return <div className="overlay">{props.children}</div>
}

const Model=props=>{
  return <Fragment>
    {ReactDOM.createPortal(<Backdrop/>,document.getElementById("overlay"))}
    {ReactDOM.createPortal(<Overlay>{props.children}</Overlay>,document.getElementById("overlay"))}
  </Fragment>
}

export default Model;

