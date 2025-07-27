import React from 'react';
import { ChecklistProvider } from './ChecklistContext';
import Checklist from './Checklist';

function App() {
  return (
    <ChecklistProvider>
      <Checklist />
    </ChecklistProvider>
  );
}

export default App;
