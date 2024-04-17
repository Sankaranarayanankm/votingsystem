import React, { useReducer } from "react";
import voteContext from "./context";

const defaultState = {
  items: [],
};
const reducer = (state, action) => {
  if (action.type == "ADD") {
    const updatedItems = [...state.items, action.item];
    return {
      items: updatedItems,
    };
  } else if (action.type == "REMOVE") {
    console.log(action,state)
    const updatedItems = state.items.filter((item) => item.id !== action.id);
    return {
      items: updatedItems,
    };
  } else return defaultState;
};

const CartProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const addStudentVote = (item) => {
    dispatch({ type: "ADD", item: item });
  };
  const removeStudentVote = (id) => {
    dispatch({ type: "REMOVE", id: id });
  };
  const defaultvalue = {
    items: state.items,
    onAdd: addStudentVote,
    onRemove: removeStudentVote,
  };
  return (
    <voteContext.Provider value={defaultvalue}>
      {props.children}
    </voteContext.Provider>
  );
};

export default CartProvider;
