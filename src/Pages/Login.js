import React from "react";
import "./login.css";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLogin } from "../hooks/useLogin"
import logo from "../limg/design1.png";
import logo1 from "../limg/gpay.png";
import logo2 from "../limg/appstore.png";
import logo3 from "../limg/Ellipse1.png";
import logo4 from "../limg/Google.png";
import logo5 from "../limg/Facbook.png";
import logo6 from "../limg/apple.png";

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {login, error, isLoading} = useLogin()
  const [userId, setUserId] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()

    await login(email, password)
    
    // setUserId(data.userId);
      // if (response.status == 200) {
    //   let val = { userId: data.userId, email };
    //   navigate({
    //     pathname: `/Verify/${data.userId}/${email}`,
    //   });
    // }
  }
// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setpassword] = useState("");
//   const [userId, setUserId] = useState("");
//   const navigate = useNavigate();

//   async function loginUser(event) {
//     event.preventDefault();
//     const response = await fetch("http://localhost:3002/api/auth/login", {
//       method: "POST",

//       headers: {
//         "Content-type": "application/json",
//       },
//       body: JSON.stringify({
//         email,
//         password,
//       }),
//     });

    // let data = await response.json();

    // setUserId(data.userId);
    // if (response.status == 200) {
    //   let val = { userId: data.userId, email };
    //   navigate({
    //     pathname: `/Verify/${data.userId}/${email}`,
    //   });
    // }

    //navigateToVerifyPage(userId);
    // navigate("/Verify ");
    /* make a response request to the backend and get the user id and pass it to the verify page */
  

  return (
    <div className="login">
      <div className="leftside">
        <img src={logo} alt="" height={600} width={600} />
      </div>
      <h1 className="h1">Welcome!</h1>
      <form onSubmit={handleSubmit}>
        <h2 className="h2">Sign in to your account</h2>
        <input
          className="username"
          type="text"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="passw"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="forgot">Forgot Password ?</p>
        <button disabled={isLoading} className="Signin">Sign in</button>
        <div className="rect1">
          <img src="./Rect" alt="" />
        </div>
        <p className="or">Or Sign up With</p>
        <div className="rect2">
          <img src="./rect1" alt="" />
        </div>
        <button disabled={isLoading} onClick={() => navigate({pathname: `/signup`}) } className="Signup">Sign up</button>
        {error && <div className="error">{error}</div>}
      </form>
      <p className="get">Get the App.</p>
      <div className="ep1">
        <img src={logo3} alt="" />
      </div>
      <div className="goog">
        <img src={logo4} alt="" />
      </div>
      <div className="ep2">
        <img src={logo3} alt="" />
      </div>
      <div className="face">
        <img src={logo5} alt="" />
      </div>

      <div className="gpay">
        <img src={logo1} alt="" height={45} width={190} />
      </div>
      <div className="appstore">
        <img src={logo2} alt="" height={45} width={190} />
      </div>

      <div></div>
    </div>
  );

  }
export default Login;
