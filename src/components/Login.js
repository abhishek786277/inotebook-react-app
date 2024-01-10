import React from "react";
import { useState } from "react";

function Login() {
  const [value, setvalue] = useState({ email: "", password: "" });
  const inputchange = (e) => {
    setvalue({ ...value, [e.target.name]: e.target.value });
  };
  const handlesignup = (e) => {
    e.preventDefault();
    loginapi();
  };

  const loginapi = async () => {
    // Default options are marked with *
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(value), // body data type must match "Content-Type" header
    });
    console.log(value);
    const data = await response.json(); // parses JSON response into native JavaScript objects
    console.log(data);
  };
  return (
    <div>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            name="email"
            type="email"
            className="form-control"
            id="email"
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
            id="password"
            onChange={inputchange}
            autoComplete="on"
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handlesignup}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
