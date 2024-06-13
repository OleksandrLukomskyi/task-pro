import EditUser from "../EditUser/EditUser";
import { useState } from "react";
import css from "./Header.module.css";
// import Navigation from "../Navigation/Navigation";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEditClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // const [isOpen, setOpen] = useState(false);
  // const close = () => {
  //   setOpen(false);
  // };

  return (
    <header className={css.header}>
      <button
        type="button"
        // onClick={() => setOpen(!isOpen)}
        aria-label="navigation"
      >
        menu
      </button>
      {/* {isOpen && <Navigation close={close} />} */}
      <div>
        <button
          type="button"
          onClick={handleEditClick}
          aria-label="user-profile"
        >
          UserName
        </button>
        <EditUser isOpen={isModalOpen} onClose={handleCloseModal} />
      </div>
    </header>
  );
};

export default Header;
