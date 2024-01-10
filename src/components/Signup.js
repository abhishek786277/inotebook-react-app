import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  let navigate = useNavigate();

  const [value, setvalue] = useState({ name: "", email: "", password: "" });
  const inputchange = (e) => {
    setvalue({ ...value, [e.target.name]: e.target.value });
  };
  const handlesignup = (e) => {
    e.preventDefault();
    signupapi();
  };
  const signupapi = async () => {
    // Default options are marked with *
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(value), // body data type must match "Content-Type" header
    });
    console.log(value);
    const data = await response.json(); // parses JSON response into native JavaScript objects
    console.log(data);
    if (data.errors) {
      navigate("/signup");
    } else {
      navigate("/");
    }
  };

  return (
    <div>
      <form onSubmit={handlesignup}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Enter Your Name:
          </label>
          <input
            name="name"
            type="name"
            className="form-control"
            id="name"
            aria-describedby="emailHelp"
            onChange={inputchange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            name="email"
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={inputchange}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            name="password"
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={inputchange}
            autoComplete="on"
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          // onClick={handlesignup}
        >
          SignUp
        </button>
      </form>
    </div>
  );
}

export default Signup;
