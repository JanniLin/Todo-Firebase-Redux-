import React, {useEffect} from "react";
import TodoBlock from "./components/TodoBlock";
import TodoItem from "./components/TodoItem";
import AlertSuccess from "./components/AlertSuccess";
import {useDispatch, useSelector} from "react-redux";
import {actionsTodo} from "./redux/actions/actions";
import AlertDanger from "./components/AlertDanger";


function App() {
  const dispatch = useDispatch()
  const {todo, isLoading, alertDanger, alertSuccess} = useSelector(state => state.todoReducer)

  useEffect(() => {
    dispatch(actionsTodo.fetchTodoAction())

  }, [])


  const handleKeyPress = (todoText) => {
    dispatch(actionsTodo.addTodoAction({
      checked: false,
      todoText,
    }))
  }


  return (
    <div className="App vh-100 bg-success p-2 text-dark bg-opacity-10 position-relative">

      {alertSuccess.length > 0 && <AlertSuccess alertText={alertSuccess}/>}
      {alertDanger.length > 0 && <AlertDanger alertText={alertDanger}/>}

      <TodoBlock handleKeyPress={handleKeyPress} loader={isLoading}>
        {todo?.length > 0 && todo.map(el => {
          return (
            <div>
              <TodoItem text={el.todoText} id={el.id} key={el.id}/>

            </div>
          )

        })}
      </TodoBlock>


    </div>
  );
}

export default App;
