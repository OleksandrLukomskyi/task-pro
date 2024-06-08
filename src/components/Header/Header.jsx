import { useState } from "react";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const close = () => {
    setOpen(false);
  };

  return (
    <header>
      <button
        type="button"
        onClick={() => setOpen(!isOpen)}
        aria-label="navigation"
      >
        menu
      </button>
      <div>
        <button type="button" aria-label="user-profile">
          UserMenu
        </button>
      </div>
    </header>
  );
};

export default Header;
