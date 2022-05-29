import React, { useState, useContext } from "react";
import "./login.scss";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";

function Login() {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState("");

  const navigate = useNavigate();

  const { dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();

    // createUserWithEmailAndPassword(auth, email, password)
    // .then((userCredential) => {
    //   //Signed in
    //   const user = userCredential.user;

    //   console.log(user);
    // })
    // .catch((error) => {
    //   setError(true)
    // })

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        //Signed in
        const user = userCredential.user;
        dispatch({ type: "LOGIN", payload: user });
        navigate("/admin/dashboard");
      })
      .catch((error) => {
        setError(true);
      });
  };

  return (
    <div className="login-container">
      <div className="row">
        <form onSubmit={handleLogin}>
          <div className="title">Login</div>
          {error && (
            <div className="error">
              <span>Wrong email or password</span>
            </div>
          )}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Enter Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password"
              onChange={(e) => setPassWord(e.target.value)}
            />
          </div>

          <div className="submit">
            <button type="submit" className="submit-btn">
              submit
            </button>
          </div>
          <div className="forgot">
            <a href="home" className="forgot-btn">
              forgot password
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
