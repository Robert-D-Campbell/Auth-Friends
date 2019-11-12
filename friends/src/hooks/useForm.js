import { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const useForm = callback => {
  const [values, setValues] = useState({ username: "", password: "" });

  const handleChanges = e => {
    const { name, value } = e.target;

    console.log(e.target.name);
    console.log(e.target.value);
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(values);
    axiosWithAuth()
      .post("/login", values)
      .then(res => {
        console.log(res.data);
        localStorage.setItem("token", res.data.payload);
        callback();
      })
      .catch(err => console.log(err));
  };

  return {
    handleChanges,
    handleSubmit,
    values
  };
};

export default useForm;
