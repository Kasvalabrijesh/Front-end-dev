import React from 'react';
import { RecoilRoot } from 'recoil';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  return (
    <RecoilRoot>
      <div style={{ maxWidth: '500px', margin: 'auto', textAlign: 'center' }}>
        <h1>📝 Recoil Todo List</h1>
        <TodoInput />
        <TodoList />
      </div>
    </RecoilRoot>
  );
}

export default App;
