import React, { useState } from "react";


const App = () => {
  //todoの入れ物
  const [todos, setTodo] = useState([])
  const [title, setTask] = useState('')

  const Click = () => {
  if (title === '') {
      return　
  } else {
    setTodo(todos => [...todos, { title }])
    //入力フォームをリセット
    setTask('')
  }
}

  return <div>
    <div>TODO</div>
    <input type="text" value={title} onChange={(e) => { setTask (e.target.value) }}/>
    <button onClick={Click}>追加</button>
    <ul>
      {todos.map((item, index)=> (
        <li key={index}>{item.title}</li>
      ))}
    </ul>
  </div>
}




export default App