import React from 'react';
import { useRecoilState } from 'recoil';
import { todoListState } from '../recoil/todoState';

function TodoItem({ item }) {
  const [todoList, setTodoList] = useRecoilState(todoListState);

  const toggleComplete = () => {
    setTodoList(todoList.map((todo) =>
      todo.id === item.id ? { ...todo, isComplete: !todo.isComplete } : todo
    ));
  };

  const removeItem = () => {
    setTodoList(todoList.filter((todo) => todo.id !== item.id));
  };

  return (
    <li style={{ margin: '8px 0' }}>
      <input
        type="checkbox"
        checked={item.isComplete}
        onChange={toggleComplete}
      />
      <span style={{ textDecoration: item.isComplete ? 'line-through' : 'none', marginLeft: '10px' }}>
        {item.text}
      </span>
      <button style={{ marginLeft: '10px' }} onClick={removeItem}>❌</button>
    </li>
  );
}

export default TodoItem;
