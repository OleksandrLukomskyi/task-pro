import { useState } from 'react';
import HelpModal from '../HelpModal/HelpModal.jsx';
import css from './HelpBox.module.css';
import HelpImg from '../../../../assets/icons/2.png';
import { HiOutlineQuestionMarkCircle } from 'react-icons/hi';

function HelpBox() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className={css.helpBox}>
      <ul>
        <li>
          <img src={HelpImg} alt="" />
        </li>
        <li>
          <p>
            If you need help with TaskPro, check out our support resources or
            reach out to our customer support team.
          </p>
        </li>
        <li>
          <a className={css.button} href="#" onClick={openModal}>
            <HiOutlineQuestionMarkCircle /> Need Help?
          </a>
          <HelpModal show={isModalOpen} onClose={closeModal} />
        </li>
      </ul>
    </div>
  );
}

export default HelpBox;
