import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../store/counterSlice";

export default function Counter() {
  //useSelector is used here to get the state's property from the store..

  const { counter } = useSelector((state) => state[1]);
  const dispatch = useDispatch();
  const increment = () => {
    dispatch(
      // { type: "INC" }
      actions.increment()
    );
  };
  const decrement = () => {
    dispatch(
      // {
      //  type: "DIC" }
      actions.decrement()
    );
  };
  const addBy = () => {
    dispatch(
      // { type: "ADD", payload: 5 }
      actions.addBy(5)
    );
  };
  return (
    <div
      style={{ backgroundColor: "powderblue", width: "800px", height: "500px" }}
    >
      <h3 style={{ marginLeft: "5px" }}>Counter Application</h3>
      <h4 style={{ marginLeft: "10px" }}>{counter}</h4>
      <button
        onClick={increment}
        className="btn btn-primary"
        style={{ margin: "5px" }}
      >
        Increase
      </button>
      <button
        onClick={decrement}
        className="btn btn-primary"
        style={{ margin: "5px" }}
      >
        Decrease
      </button>
      <button
        onClick={addBy}
        className="btn btn-primary"
        style={{ margin: "5px" }}
      >
        Add By 5
      </button>
    </div>
  );
}
