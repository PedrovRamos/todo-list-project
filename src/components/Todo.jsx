import React, { useContext } from 'react';
import Input from './Input.jsx';
import Context from '../context/Context';

export default function Todo({ todoData }) {
    console.log(todoData);
//   const { editTodo } = useContext(Context);

//   const handleChange = () => {
//     editTodo({ ...todoData, checked: !todoData.checked });
//   };

  return (
    <label htmlFor={ todoData.id }>
      <Input
        type="checkbox"
        id={ todoData.id }
        value={ todoData.value }
        checked={ todoData.checked }
      />
      {todoData.value}
    </label>
  );
}