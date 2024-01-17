import { useState } from "react"
import { useLogin } from "../../hooks/useLogin"
import { Link, useNavigate } from 'react-router-dom';
import { Logo } from "../../components";
import './styles.css'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login, error, Loading } = useLogin()
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()

    await login(email, password)
  }

  return (
    <div className="login-page">

      <img src="src\assets\doc.png" alt="doctor image" className="doctor-img-login"></img>

      <div className="login-upper-container">

        <div className="login-logo">
          <Logo />
        </div>

        <div className="login-container">
        
        <h1>Hi, there!</h1>

        <form className="login" onSubmit={handleSubmit}>

          <label>Email:</label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            // placeholder='Enter your email'
          />
          <label>Password:</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            // placeholder='Enter your password'
          />

          <button role='thisButton' disabled={Loading} id="loginButton">Log in</button>
          {error && <div className="error">{error}</div>}

          <p>Do not have an account? <span className='login-signup-link' onClick={() => navigate('/signup')} role='thatButton'>Signup</span> here</p>
        </form>

      </div>

      </div>

      {/* <Link to="/signup"><button role='thatButton'id="signupLink">No account?</button></Link> */}

    </div>
  )
}

export default Login
