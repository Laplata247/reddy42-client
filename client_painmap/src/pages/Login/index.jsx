import { useState } from "react"
import { useLogin } from "../../hooks/useLogin"
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login, error, Loading } = useLogin()
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()

    await login(email, password)
    navigate("/");
  }

  return (
    <>
      <form className="login" onSubmit={handleSubmit}>
        <h1>Log In</h1>

        <label>Email:</label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <label>Password:</label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />

        <button disabled={Loading} id="loginButton">Log in</button>
        {error && <div className="error">{error}</div>}
      </form>

      <Link to="/signup"><button id="signupLink">No account?</button></Link>

    </>
  )
}

export default Login
