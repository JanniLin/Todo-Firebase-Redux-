import React, {useRef} from 'react';
import Spinner from 'react-bootstrap/Spinner';


const TodoBlock = ({handleKeyPress, children, loader}) => {
  const inputRef = useRef(null)
  const formRef = useRef(null)


  return (
    <div>
      <div className='todoInput bg-success p-2  text-dark bg-opacity-25 '>
        <form ref={formRef} className='m-3 mb-4 ' onSubmit={(event) => {
          event.preventDefault()
          handleKeyPress(inputRef.current.value)
          formRef.current.reset()
        }}>
          <label className="form-label fst-normal">Your TODOLIST</label>
          <div className="input-group mb-3">

            {loader ? <div className='ms-1'>
              <Spinner animation="grow" variant="success"/>
            </div> : <input type="text" className="h-50 form-control fst-normal"
                            placeholder="What needs to be done?" ref={inputRef} readOnly={loader}/>}

          </div>
        </form>
      </div>

      <div className='todoList bg-success p-2 text-dark bg-opacity-50 overflow-auto'>
        {children}

      </div>

    </div>
  );
};

export default TodoBlock;
