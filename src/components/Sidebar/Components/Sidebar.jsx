import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBoards } from '../../../redux/boards/operations';
import BoardList from './Board/BoardList';
import CreateNewBoardButton from './CreateNewBoard/CreateNewBoardButton';
import CreateNewBoardModal from './CreateNewBoard/CreateNewBoardModal';
import HelpModal from './HelpModal/HelpModal';
import LogoutButton from './LogoutButton';

const Sidebar = () => {
  const dispatch = useDispatch();
  const boards = useSelector((state) => state.boards.items);
  const isLoading = useSelector((state) => state.boards.loading);
  const error = useSelector((state) => state.boards.error);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHelpModalOpen, setIsHelpModalOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchBoards());
  }, [dispatch]);

  // UseEffect to update boards list after a new board is created
  useEffect(() => {
    if (!isModalOpen) {
      dispatch(fetchBoards());
    }
  }, [isModalOpen, dispatch]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openHelpModal = () => {
    setIsHelpModalOpen(true);
  };

  const closeHelpModal = () => {
    setIsHelpModalOpen(false);
  };

  return (
    <div className="sidebar">

<ul>
    <li><h1>Task Pro</h1></li>
    <li><CreateNewBoardButton onOpen={openModal} /></li>
    <li>  {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error fetching boards</p>
      ) : (
        <BoardList boards={boards} />
      )}
      <CreateNewBoardModal show={isModalOpen} onClose={closeModal} />
      </li>
    <li><button onClick={openHelpModal}>Need Help</button>
    <HelpModal show={isHelpModalOpen} onClose={closeHelpModal} /></li>
    <li> <LogoutButton /></li>
  </ul>
      
      
    
      
      
     
    </div>
  );
};

export default Sidebar;
