import React, { useEffect, useRef, useState } from "react";

export const useClickOutside = (initialIsVisible) => {
  const [isVisible, setIsVisible] = useState(initialIsVisible);
  const ref = useRef();

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return { ref, isVisible, setIsVisible };
};

export default function SampleUseClickOutsideComponent() {
  const { ref, isVisible, setIsVisible } = useClickOutside(false);
  const onClick = () => {
    setIsVisible(true);
  };

  return (
    <div>
      <button onClick={onClick}>Show Pop Up</button>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          background: "rgba(0, 0, 0, 0.7)",
          position: "fixed",
          top: 0,
          left: 0,
          display: isVisible ? "flex" : "none",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: 200,
            height: 150,
            background: "white",
            borderRadius: 10,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          ref={ref}
        >
          NEW POP UP!
        </div>
      </div>
    </div>
  );
}
