import { useState } from 'react';

export const useForm = (callback, initialState = {}) => {
  const [user, setUser] = useState(initialState);

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    callback();
  };

  return {
    handleChange,
    handleSubmit,
    user
  };
};
