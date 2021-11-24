import { useState } from "react";

const useInput = (validateFunc) => {
  const [inputValue, setInputValue] = useState('');

  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateFunc(inputValue);
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (e) => {
    setInputValue(e.target.value);
  }
  const inputBlurHandler = (e) => {
    setIsTouched(true);
  }

  const paramSetHandler = (value) => {
    setInputValue(value)
  }

  const reset = () => {
    setInputValue('');
    setIsTouched(false);
  }

  return {
    value: inputValue,
    hasError,
    valueChangeHandler,
    isValid: valueIsValid,
    inputBlurHandler,
    paramSetHandler,
    reset
  }
}

export default useInput;