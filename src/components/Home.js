import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const isDark = useSelector((state) => state.darkReducer);

  return (
    <div
      className="p-5"
      style={{
        backgroundColor: `${isDark ? "black" : "white"}`,
        color: `${isDark ? "lightgreen" : "black"}`,
      }}
    >
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam inventore
      fuga ex animi. Corrupti harum, quibusdam possimus placeat officiis
      doloremque et laudantium vero quisquam facere optio recusandae dolorum
      sunt soluta quas omnis minima. Quidem itaque aliquid amet cupiditate
      dignissimos consequuntur ducimus officiis temporibus odio. Quae impedit
      aperiam dolor asperiores accusamus, quasi est temporibus neque? Libero
      eius voluptas nihil eum at, facere officiis! Nesciunt, doloremque
      laboriosam. Unde cum reiciendis dolorum inventore natus earum excepturi
      quis dicta optio temporibus ex minima suscipit veniam numquam sint, ipsa
      distinctio ullam. Harum optio quas ea illum vero placeat ullam, expedita
      rem quaerat minima quo voluptatem.
    </div>
  );
};

export default Home;
