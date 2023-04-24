import { useState } from 'react'
import generateRandomNum from '../utils/generateRandomNum'

function RandomNumber({ maxNum }) {
  const [number, setNumber] = useState(generateRandomNum(maxNum))

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={() => setNumber(generateRandomNum(maxNum))}>
        Generate Random Number
      </button>
    </div>
  )
}

export default RandomNumber
