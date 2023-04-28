import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Counter from './components/Counter'

const texts = ['click 0', 'click 1', 'click 2', 'click 3', 'click 4', 'click 5']

function App() {
  const [count, setCount] = useState(0)

  const incrementCount = () => setCount(count + 1)

  return (
    <div className="App">
      <Counter count={count} />
      {texts.map((text) => (
        <Button text={text} onClick={incrementCount} />
      ))}
    </div>
  )
}

export default App
