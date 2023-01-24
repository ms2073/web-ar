//make it return user from the backend and pass it to the verify page as a prop
import React from "react";
import logo from "../limg/design1.png";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "./Signup.css";
import axios from "axios";
import Verify from "./Verify";
// import { useHistory } from "react-router-dom";

function Signup() {
  // const navigate = navigateToVerifyPage();
  const [firstName, setfname] = useState("");
  const [lastName, setlname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [userId, setUserId] = useState("");
  const navigate = useNavigate();

  async function registerUser(event) {
    event.preventDefault();
    const response = await fetch("http://localhost:3002/api/auth/signup", {
      method: "POST",

      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        password,
      }),
    });

    let data = await response.json();

    setUserId(data.userId);
    if (response.status == 200) {
      let val = { userId: data.userId, email };
      navigate({
        pathname: `/Verify/${data.userId}/${email}`,
      });
    }

    //navigateToVerifyPage(userId);
    // navigate("/Verify ");
    /* make a response request to the backend and get the user id and pass it to the verify page */
  }

  //useEffect(() => {
  //const fetchUserId = async () => {
  // try {
  // setTimeout(async () => {
  //   const response = await fetch('http://localhost:5000/api/auth/verify/id');
  //    const data = await response.json();
  //    setUserId(data.id);
  //}, 25000);
  //   } catch (error) {
  //   console.error(error);
  //    }
  //  };
  //  fetchUserId();
  //  }, []);

  return (
    <div className="register">
      <div className="rightside">
        <img src={logo} alt="" height={600} width={600} />
      </div>
      <form onSubmit={registerUser}>
        <h1 className="reg">Register</h1>
        <h2 className="creat">Create your account</h2>
        <h3 className="first">First Name</h3>
        <input
          value={firstName}
          onChange={(e) => setfname(e.target.value)}
          className="firstname"
          type="text"
          placeholder="  First name"
        />
        <h3 className="last">Last Name</h3>
        <input
          value={lastName}
          onChange={(e) => setlname(e.target.value)}
          className="lastname"
          type="text"
          placeholder="  Last name"
        />
        <h3 className="emailid">Email Id</h3>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="email1"
          type="email"
          placeholder="  Your Email"
        />
        <h3 className="pass">Password </h3>
        <input
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          className="Password "
          type="password"
          placeholder="  Password"
        />
        <h3 className="cfpass">Confirm Password</h3>
        <input
          className="cfPassword"
          type="password"
          placeholder=" Confirm Password"
        />
        <button type="submit" value="Register" className="signup">
          Sign up
        </button>
        <button className="signin">Sign in</button>
      </form>
      {/* <p>User ID: {userId}</p> */}

      {/* <Verify setUserId={userId} /> */}
    </div>
  );
}

// export { userId };
export default Signup;
