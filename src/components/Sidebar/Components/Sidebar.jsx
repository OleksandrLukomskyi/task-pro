// import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchBoards } from '../../../redux/boards/operations';
// import BoardList from './Board/BoardList';
// import CreateNewBoardButton from './CreateNewBoard/CreateNewBoardButton';
// import CreateNewBoardModal from './CreateNewBoard/CreateNewBoardModal';
// import HelpBox from './Help/HelpBox';
// import LogoutButton from './LogoutButton';
// import css from './Sidebar.module.css';

// const Sidebar = ({ getId }) => {
//   const dispatch = useDispatch();
//   const boards = useSelector(state => state.boards.items);
//   const isLoading = useSelector(state => state.boards.loading);
//   const error = useSelector(state => state.boards.error);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isHelpModalOpen, setIsHelpModalOpen] = useState(false);
//   let [oneBoardId, setoneBoardId] = useState('');

//   useEffect(() => {
//     dispatch(fetchBoards());
//   }, [dispatch]);

//   // UseEffect to update boards list after a new board is created
//   useEffect(() => {
//     if (!isModalOpen) {
//       dispatch(fetchBoards());
//     }
//   }, [isModalOpen, dispatch]);

//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   const openHelpModal = () => {
//     setIsHelpModalOpen(true);
//   };

//   const closeHelpModal = () => {
//     setIsHelpModalOpen(false);
//   };

//   const handleBoardId = idBoard => {
//     setoneBoardId((oneBoardId = idBoard));
//     // console.log(oneBoardId);
//     getId(oneBoardId);
//   };

//   return (
//     <div className="sidebar">
//       <ul>
//         <li>
//           <h1>Task Pro</h1>
//         </li>
//         <li className={css.createNewBoardButton}>
//           <CreateNewBoardButton onOpen={openModal} />
//         </li>
//         <li className={css.boardList}>
//           {' '}
//           {isLoading ? (
//             <p>Loading...</p>
//           ) : error ? (
//             <p>Error fetching boards</p>
//           ) : (
//             <BoardList handleBoardId={handleBoardId} />
//           )}
//           <CreateNewBoardModal show={isModalOpen} onClose={closeModal} />
//         </li>
//         <li className={css.helpBox}>
//           <HelpBox />
//         </li>
//         <li>
//           {' '}
//           <LogoutButton />
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBoards } from '../../../redux/boards/operations';
import BoardList from './Board/BoardList';
import CreateNewBoardButton from './CreateNewBoard/CreateNewBoardButton';
import CreateNewBoardModal from './CreateNewBoard/CreateNewBoardModal';
import HelpBox from './Help/HelpBox';
import LogoutButton from './LogoutButton';
import css from './Sidebar.module.css';
import logo from '../../../assets/icons/logo.png';
import BeatLoader from 'react-spinners/BeatLoader';
import { HiLightningBolt } from 'react-icons/hi';
const Sidebar = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.boards.loading);
  const error = useSelector(state => state.boards.error);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // UseEffect to update boards list after a new board is created
  // useEffect(() => {
  //   dispatch(fetchBoards());
  // }, [dispatch]);

  // useEffect(() => {
  //   if (!isModalOpen) {
  //     dispatch(fetchBoards());
  //   }
  // }, [isModalOpen, dispatch]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={css.sidebar}>
      <div className={css.logo}>
        <div className={css.logoItem}>
          <HiLightningBolt className={css.logoItemLigh} />
        </div>

        <h1>Task Pro</h1>
      </div>
      <ul>
        <li className={css.createNewBoardButton}>
          <CreateNewBoardButton onOpen={openModal} />
        </li>
        <li className={css.boardList}>
          {isLoading ? (
            <div className={css.loader}>
              <BeatLoader color="rgba(255, 255, 255, 0.23)" width="50px" />
            </div>
          ) : error ? (
            <p>Error fetching boards</p>
          ) : (
            <BoardList />
          )}
          <CreateNewBoardModal show={isModalOpen} onClose={closeModal} />
        </li>
        <li className={css.helpBox}>
          <HelpBox />
        </li>
        <li>
          <LogoutButton />
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
