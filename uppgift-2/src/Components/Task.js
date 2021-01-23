import React, { useState } from 'react';
import Form from './Form';
import { MdDeleteForever } from "react-icons/md";
import { MdEdit } from "react-icons/md";



const Task = ({ tasks, completeTask, removeTask, updateTask }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateTask(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <Form edit={edit} onSubmit={submitUpdate} />;
  }

  return tasks.map((task, index) => (
    <div className="container">
    <div
      className={task.isComplete ? 'todo-row complete' : 'todo-row' }
      key={index}
    >
      <div key={task.id} onClick={() => completeTask(task.id)}>
        {task.text}
      </div>
          <div className='icons'>
            <MdEdit 
                onClick={() => setEdit({ id: task.id, value: task.text })}
                className='edit-icon'
            />
            <MdDeleteForever 
                onClick={() => removeTask(task.id)}
                className='delete-icon'
            />
          </div>
    </div>
    </div>
  ));
};

export default Task;