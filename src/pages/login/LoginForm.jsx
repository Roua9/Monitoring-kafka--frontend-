import { React, useState } from "react"
import "./loginform.css"
import profile from "../../assets/images/a.png"
import email from "../../assets/images/email.jpg"
import pass from "../../assets/images/pass.png"
import user from "../../assets/images/user1.png"
function LoginForm() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const handleLogin = () => {
    if (username === "admin" && password === "admin") {
      setIsLoggedIn(true)
      window.location.href = "/home" // Redirige vers le tableau de bord
    } else {
      alert("UserName ou password incorrect.")
    }
  }
  return (
    <div className="main">
      <div className="sub-main">
        <div>
          <div className="imgs">
            <div className="container-image">
              <img src={user} alt="profile" className="profile" />
            </div>
          </div>
          <div>
            <h1 className="log">Login Page</h1>
            <div>
              <img src={email} alt="email" className="email" />
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="name"
                type="text"
                placeholder="Username"
              />
            </div>
            <div className="second-input">
              <img src={pass} alt="pass" className="email" />
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
                className="name"
              />
            </div>
            <div className="login-button">
              <button className="loginButton" onClick={handleLogin}>
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
