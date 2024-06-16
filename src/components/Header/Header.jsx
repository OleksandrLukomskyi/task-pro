import EditUser from "../EditUser/EditUser";
import { useState } from "react";
import css from "./Header.module.css";
import sprite from "../../assets/icons/Sprite.svg";
import { Navigation } from "../Navigation/Navigation";
import ChangeTheme from "../ChangeTheme/ChangeTheme";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // const handleEditClick = () => {
  //     setIsModalOpen(true);
  //    };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const [isOpen, setOpen] = useState(false);
  const close = () => {
    setOpen(false);
  };

  return (
    <header className={css.header}>
      <button
        className={css.menuBtn}
        type="button"
        onClick={() => setOpen(!isOpen)}
        aria-label="navigation"
      >
        <svg className={css.menuIcon}>
          <use href={sprite + "#icon-menu-01"}></use>
        </svg>
      </button>
      {isOpen && <Navigation close={close} />}
      <div className={css.userWrapper}>
        <ChangeTheme/>
        <EditUser isOpen={isModalOpen} onClose={handleCloseModal} />
      </div>
    </header>
  );
};

export default Header;
