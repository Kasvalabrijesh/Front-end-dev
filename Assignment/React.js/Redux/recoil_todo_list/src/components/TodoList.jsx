import React from 'react';
import { useRecoilValue } from 'recoil';
import { todoListState } from '../recoil/todoState';
import TodoItem from './TodoItem';

function TodoList() {
  const todoList = useRecoilValue(todoListState);

  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {todoList.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </ul>
  );
}

export default TodoList;
