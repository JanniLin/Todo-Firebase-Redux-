import React from 'react';
import {actionsTodo} from "../redux/actions/actions";
import {useDispatch} from "react-redux";
import {editTodo} from "../api/api";

const TodoItem = ({text, id}) => {
  const dispatch = useDispatch()

  return (


    <div
      className=' fs-5 d-flex align-content-center m-3 justify-content-between bg-success p-2 text-white bg-opacity-75
      todoItem'>
      <span
      >
      {text}
        </span>
      <div>
        <input className="checkbox form-check-input me-1    "
               onChange={event => {
                 editTodo(id, event.target.checked)
               }}
               type="checkbox"
               id="defaultCheck1"/>

        <button onClick={() => dispatch(actionsTodo.deleteTodoAction(id))} className="btn-close"
        />
      </div>

    </div>


  );
};

export default TodoItem;
