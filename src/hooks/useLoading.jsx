import { useState, useEffect } from "react";

const useLoading = () => {
  const [hasLoad, setHasLoad] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setHasLoad(false);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return { hasLoad };
};

export default useLoading;
