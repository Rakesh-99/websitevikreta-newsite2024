// components/cursor/useMousePosition.js

import { useEffect, useState } from "react";

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (event) => {
      const { clientX, clientY } = event;
      setMousePosition({ x: clientX, y: clientY });
    };

    // Only add event listener on the client side
    if (typeof window !== "undefined") {
      window.addEventListener("mousemove", updateMousePosition);
    }

    return () => {
      // Clean up event listener
      if (typeof window !== "undefined") {
        window.removeEventListener("mousemove", updateMousePosition);
      }
    };
  }, []);

  return mousePosition;
};

export default useMousePosition;
