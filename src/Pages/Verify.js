import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
import { useLocation, useParams } from "react-router-dom";
import Signup from "./Signup";

import "./Verify.css";
import logo from "../limg/rect2.png";
//import "./Component/Register.js";

function Verify() {
  const { id, mail } = useParams();
  const [timeLeft, setTimeLeft] = useState(300);
  const [otp, setOTP] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [email, setEmail] = useState("");
  const [userId, setUserId] = useState("");
  // const location = useLocation();
  // const email = location.state ? location.state.email : "";
  // const userId = location.state ? location.state.userId : "";
  // const { email, userId } = useParams();
  //const userId = props.location.state.userId;
  // use props.location.state.userId to send to the server  to verify the OTP for the user with that id     //const userId = props.location.state.userId; // use props.location.state.userId to send to the server  to verify the OTP for the user with that id  make sure to pass the userId to this component as a prop from the Register component
  useEffect(() => {
    setUserId(id);
    setEmail(mail);
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((timeLeft) => {
        if (timeLeft === 0) {
          clearInterval(interval);
          return 0;
        } else {
          return timeLeft - 1;
        }
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleVerification = async (e) => {
    e.preventDefault();
    // Send a request to the server to verify the OTP
    const response = await fetch(
      `http://localhost:3002/api/auth/verify/${userId}`,
      {
        method: "POST",
        body: JSON.stringify({ otp, userId }),
        headers: { "Content-Type": "application/json" },
      }
    );
    const data = await response.json();
    if (data.isValid) setIsVerified(true);
  };

  if (isVerified) {
    // Redirect to the logged in page or display a message
    return <p>Email verified! You can now log in.</p>;
  }

  return (
    <div className="verify">
      <div className="leftbox">
        <img src={logo} alt="" height={747.5} width={752} />
      </div>

      <h1 className="ver">Verification</h1>
      <h2 className="vercode">Enter your Verification Code </h2>
      {/* <p>The email to be verified is: {email}</p>
      <p>The userId to be verified is: {userId}</p> */}

      <form>
        <br />
        <label>
          <input
            className="otpbox"
            type="text"
            value={otp}
            onChange={(e) => setOTP(e.target.value)}
          />
        </label>
        <button onClick={handleVerification} className="btn">
          Verify
        </button>
      </form>
      <p className="desc">
        we sent verification code to your email {email}. <br></br>check your
        inbox{" "}
      </p>

      <div className="timer">
        <p>Time left: {timeLeft} </p>
        {timeLeft === 0 && <p>OTP expired</p>}
      </div>
    </div>
  );
}

export default Verify;
