import { useState, useEffect } from "react";

const useLoading = (timerDuaration) => {
  const [hasLoad, setHasLoad] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setHasLoad(false);
    }, timerDuaration || 500);

    return () => {
      clearTimeout(timer);
    };
  }, [timerDuaration]);

  return { hasLoad };
};

export default useLoading;
