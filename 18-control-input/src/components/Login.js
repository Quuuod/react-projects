import { useState } from 'react'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    const userData = {
      username,
      password,
    }
    alert(JSON.stringify(userData))
  }

  return (
    <>
      <h1>Login form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            name="username"
          />
        </label>

        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  )
}

export default Login
