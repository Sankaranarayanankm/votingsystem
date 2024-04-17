import React, { useContext, useState } from 'react'
import HeaderForm from './HeaderForm';
import voteContext from '../../context/context';

const Header = () => {
  const [showForm,setShowForm]=useState(false);
  const voteCtx=useContext(voteContext);
  // console.log(voteCtx)
  const showFormHandler=()=>{
    setShowForm(true);
  }
  const hideFormHandler=()=>{
    setShowForm(false);
  }
  const totalVote=voteCtx.items.length;
  return (
    <header>
      <h1>Class Moniter Vote</h1>
      <p>Total Vote {totalVote}</p>
      <button onClick={showFormHandler}>Add new Vote</button>
      { showForm &&<HeaderForm onclick={hideFormHandler}  />}
    </header>
  )
}

export default Header;