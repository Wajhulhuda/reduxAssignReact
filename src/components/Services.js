import React from "react";
import { useSelector } from "react-redux";

const Services = () => {
  const isDark = useSelector((state) => state.darkReducer);
  return (
    <div
      className="p-5"
      style={{
        backgroundColor: `${isDark ? "black" : "white"}`,
        color: `${isDark ? "lightgreen" : "black"}`,
      }}
    >
      <h1>Our service are not available</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quae quas
        aliquid necessitatibus eius voluptate expedita, sed esse, minus officia
        recusandae illo hic commodi aliquam officiis culpa sit, modi asperiores?
      </p>
    </div>
  );
};

export default Services;
