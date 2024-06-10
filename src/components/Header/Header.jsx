import EditUser from "components/EditUser/EditUser";
import { useState } from "react";

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
  // }

  return (
    <header>
      <button
        type="button"
        // onClick={() => setOpen(!isOpen)}
        aria-label="navigation"
      >
        menu
      </button>
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
