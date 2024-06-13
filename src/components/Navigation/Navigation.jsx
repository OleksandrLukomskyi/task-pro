import { useEffect } from "react";
import { createPortal } from "react-dom";
// import Sidebar from "../Sidebar/Components/Sidebar";

const navigationRoot = document.getElementById("navigation-root");

export const Navigation = ({ close }) => {
  const closeNav = ({ target, currentTarget, code }) => {
    if (target === currentTarget || code === "Escape") {
      close();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", closeNav);
    return () => {
      document.removeEventListener("keydown", closeNav);
    };
  }, []);

  return createPortal(
    <div onClick={closeNav}>
      <div>{/* <Sidebar /> */}</div>
    </div>,
    navigationRoot
  );
};
