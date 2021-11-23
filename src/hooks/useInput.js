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
    reset
  }
}

export default useInput;