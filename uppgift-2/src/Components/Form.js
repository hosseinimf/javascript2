import React, { useState, useEffect, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AiOutlineSave } from "react-icons/ai";



function Form(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('');
  };

  return (
    <div className="container">
    <form onSubmit={handleSubmit} className='form'>
      {props.edit ? (
        <>
          <input
            placeholder='Update your item'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='todo-input form-control'
          />
          <Button onClick={handleSubmit} variant="success">
            <AiOutlineSave/>
          </Button>
        </>
      ) : (
        <>
          <input
            placeholder='Write your task'
            value={input}
            onChange={handleChange}
            name='text'
            className='todo-input form-control'
            ref={inputRef}
          />
          <Button onClick={handleSubmit}  variant="primary" className="todo-button">
            +
          </Button>
          
        </>
      )}
    </form>
    
    </div>
  );
}

export default Form;
