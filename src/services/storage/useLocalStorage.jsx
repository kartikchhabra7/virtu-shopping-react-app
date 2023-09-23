import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const isInitialValueStored = localStorage.getItem(key);
  const initialParsedValue = isInitialValueStored
    ? JSON.parse(isInitialValueStored)
    : initialValue;

  const [isValueStored, setIsValueStored] = useState(initialParsedValue);

  const updateValue = (value) => {
    setIsValueStored(value);
    localStorage.setItem(key, JSON.stringify(value));
  };

  return {
    isValueStored,
    updateValue,
  };
};

export default useLocalStorage;
