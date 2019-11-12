import { useState } from "react";

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
    callback();
  };

  return {
    handleChanges,
    handleSubmit,
    values
  };
};

export default useForm;
