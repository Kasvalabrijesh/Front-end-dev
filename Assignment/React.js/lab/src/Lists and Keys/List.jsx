import React from 'react'

function List() {
    const fruits = ['Apple', 'Banana', 'Mango', 'Orange', 'Pineapple'];

  return (
    <div>
       <h2>Fruit List</h2>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>  
        ))}
      </ul>
    </div>
  )
}

export default List
