import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {actionsTodo} from "../redux/actions/actions";

const AlertSuccess = ({alertText}) => {
  const dispatch = useDispatch()
  const {alertSuccess} = useSelector(state => state.todoReducer)

  const closingAlert = () => {
    dispatch({...actionsTodo.alertAction.add_todo_success, payload: ""})
  }
  setTimeout(() => {
    alertSuccess.length > 0 &&
    dispatch({...actionsTodo.alertAction.add_todo_success, payload: ""})
  }, 8000)

  return (
    <div
      className='d-flex justify-content-between align-content-center  position-absolute top-0 start-50 translate-middle-x'>
      <div className="alert alert-success " role="alert">
        {alertText}

        <button type="button"
                onClick={closingAlert}
                className="btn-close ms-2" data-bs-dismiss="modal" aria-label="Close"></button>

      </div>

    </div>
  );
};

export default AlertSuccess;
