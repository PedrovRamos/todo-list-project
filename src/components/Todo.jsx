import React, { useContext, useEffect } from 'react';
import Input from './Input.jsx';
import Context from '../context/context';

export default function Todo({ todoData }) {
  const { editTodo } = useContext(Context);


  const handleChange = () => {
    editTodo({ ...todoData, checked: !todoData.checked });
  };

  return (
    <label htmlFor={ todoData.id }>
      <Input
        type="checkbox"
        id={ todoData.id }
        value={ todoData.value }
        checked={ todoData.checked }
        onChange={handleChange}
      />
      {todoData.value}
    </label>
  );
}