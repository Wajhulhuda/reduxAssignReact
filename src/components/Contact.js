import React from "react";
import { useSelector } from "react-redux";

const Contact = () => {
  const isDark = useSelector((state) => state.darkReducer);
  return (
    <div
      className="p-5"
      style={{
        backgroundColor: `${isDark ? "black" : "white"}`,
        color: `${isDark ? "lightgreen" : "black"}`,
      }}
    >
      <h1>You can mail me help@geekster.in</h1>
    </div>
  );
};

export default Contact;
