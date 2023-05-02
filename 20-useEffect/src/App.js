import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [todo, setTodo] = useState(null);
  const [id, setId] = useState(0);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id || 0}`)
      .then((response) => response.json())
      .then((res) => setTodo(res));
  }, [id]);

  console.log(todo);

  return (
    <div className="App">
      <input
        type="number"
        placeholder="Choose ID Number"
        onInput={(e) => setId(e.target.value)}
      />
      {todo && (
        <>
          <h1>{todo.title}</h1>
          <h2>{todo.id}</h2>
        </>
      )}
    </div>
  );
}

export default App;
