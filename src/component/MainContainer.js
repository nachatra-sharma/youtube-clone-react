import React, { useEffect, useState } from "react";
import VideoContainer from "./VideoContainer";
import ButtonList from "./ButtonList";

const MainContainer = () => {
  const [scrollY, setScrollY] = useState(0);
  function handleScroll() {
    setScrollY(window.scrollY);
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);
  return (
    <>
      <ButtonList />
      <VideoContainer />
    </>
  );
};

export default MainContainer;
