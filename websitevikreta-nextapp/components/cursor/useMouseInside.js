// components/cursor/useMouseInside.js
import { useEffect, useState } from "react";

const useMouseInside = () => {
  const [isMouseInside, setIsMouseInside] = useState(false);

  useEffect(() => {
    const handleMouseOut = (event) => {
      if (!event.relatedTarget || event.relatedTarget.nodeName === "HTML") {
        setIsMouseInside(false);
      }
    };

    const handleMouseOver = () => {
      setIsMouseInside(true);
    };

    // Only add event listeners on the client side
    if (typeof window !== "undefined") {
      window.addEventListener("mouseout", handleMouseOut);
      window.addEventListener("mouseover", handleMouseOver);
    }

    return () => {
      // Clean up event listeners
      if (typeof window !== "undefined") {
        window.removeEventListener("mouseout", handleMouseOut);
        window.removeEventListener("mouseover", handleMouseOver);
      }
    };
  }, []);

  return isMouseInside;
};

export default useMouseInside;
