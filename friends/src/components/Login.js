import React from "react";

import { axiosWithAuth } from "../utils/axiosWithAuth";
import useForm from "../hooks/useForm";

const Login = () => {
  const { handleChanges, handleSubmit, values } = useForm(submit);

  function submit() {
    console.log("submitted successfully");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>User Name:</label>
        <input
          type="text"
          name="username"
          placeholder="User Name"
          value={values.username}
          onChange={handleChanges}
        />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={values.password}
          onChange={handleChanges}
        />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
