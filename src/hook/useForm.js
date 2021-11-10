import { useState } from "react";

export const useForm = (initialState = {}) => {
  const [ValuesForm, setValuesForm] = useState(initialState);

  //Para limpiar la caja de texto input
  const reset = () => {
    setValuesForm(initialState);
  };
  const handleInputChange = ({ target }) => {
    // console.log(e.target.name);
    setValuesForm({
      ...ValuesForm,
      [target.name]: target.value,
    });
  };
  return [ValuesForm, handleInputChange, reset];
};
