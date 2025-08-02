import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { todoListState } from '../recoil/todoState';

function TodoInput() {
  const [input, setInput] = useState('');
  const [todoList, setTodoList] = useRecoilState(todoListState);

  const addTodo = () => {
    if (input.trim()) {
      setTodoList([
        ...todoList,
        { id: Date.now(), text: input.trim(), isComplete: false },
      ]);
      setInput('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        placeholder="Enter task"
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && addTodo()}
      />
      <button onClick={addTodo}>Add</button>
    </div>
  );
}

export default TodoInput;
