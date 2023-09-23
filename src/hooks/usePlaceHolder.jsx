import { useState, useEffect } from "react";

const usePlaceholder = () => {
  const [placeholder, setPlaceholder] = useState("");

  useEffect(() => {
    const placeholderOptions = [
      "Search for Clothes",
      "Search for Toys",
      "Search for Home Decorative",
      "Search for Skin Products",
      "Search for Sports",
      "Search for Dresses",
    ];
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * placeholderOptions.length);
      setPlaceholder(placeholderOptions[randomIndex]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return placeholder;
};

export default usePlaceholder;
