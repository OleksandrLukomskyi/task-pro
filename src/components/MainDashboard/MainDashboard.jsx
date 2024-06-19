// import { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//   createColumn,
//   deleteColumn,
//   fetchColumns,
// } from '../../redux/columns/slice';
// import Modal from 'react-modal';
// import Column from '../Column/Column';
// import css from './MainDashboard.module.css';
// import {
//   selectColumnsData,
//   selectLoading,
//   selectError,
// } from '../../redux/columns/selectors';
// import toast, { Toaster } from 'react-hot-toast';
// import axios from 'axios';
// import sprite from '../../assets/icons/Sprite.svg';
// import ColumnItem from '../ColumnItem/ColumnItem';
// import { selectOneBoard } from '../../redux/boards/selectors';

// Modal.setAppElement('#root');

// export default function MainDashboard({ idBoard }) {
//   const dispatch = useDispatch();
//   // let [oneBoardId, setoneBoardId] = useState(idBoard);

//   useEffect(() => {
//     dispatch(fetchColumns(idBoard));
//   }, [dispatch, idBoard]);

//   let [isModalOpen, setIsModalOpen] = useState(false);
//   const [newColumnTitle, setNewColumnTitle] = useState('');

//   const loading = useSelector(selectLoading);
//   const error = useSelector(selectError);

//   const columns = useSelector(selectColumnsData);
//   const [columnsData, setColumnsData] = useState([]);

//   // const fetchColumns = async (boardId) => {
//   //   try {
//   //     const response = await axios.get(
//   //       `https://project-back-codewave1-rqmw.onrender.com/api/columns/?boardId=${boardId}`,
//   //       {
//   //         headers: {
//   //           Authorization:
//   //             "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NmI1NTYxNDhiMTY4ZTdjMWM3NWQ2MSIsImVtYWlsIjoicDNAcC5jb20iLCJpYXQiOjE3MTgzMTAyNDEsImV4cCI6MTcxOTE3NDI0MX0.MB7dXShXVl1aqxvRkxsMvhMAYiuk0LbHjLTeAPOQXdE",
//   //         },
//   //       }
//   //     );
//   //     console.log(response.data);
//   //     setColumnsData(response.data.columns);
//   //   } catch (error) {
//   //     console.error("Fetch columns error:", error);
//   //     setColumnsData([]);
//   //   }
//   // };

//   // console.log(columns);

//   // const handleColumnSubmit = (evt) => {
//   //   evt.preventDefault();
//   //   setIsModalOpen((isModalOpen = true));
//   //   console.log(oneBoardId);
//   //   const form = evt.target;
//   //   const { formTitle } = form.elements;
//   //   let newObj = {
//   //     boardId: oneBoardId,
//   //     title: formTitle.value,
//   //   };

//   //   dispatch(createColumn(newObj));
//   //   form.reset();
//   // };

//   const handleAddColumn = e => {
//     e.preventDefault();

//     let newObj = {
//       boardId: idBoard,
//       title: newColumnTitle,
//     };

//     dispatch(createColumn(newObj));

//     setIsModalOpen(false);
//   };

//   return (
//     <div>
//       <ul className={css.columnList}>
//         {columns.map(item => {
//           return (
//             <li className={css.columnItem} key={item._id}>
//               <ColumnItem
//                 id={item._id}
//                 boardId={item.board}
//                 owner={item.owner}
//                 title={item.title}
//                 // onDeleteColumn={handleDeleteColumn}
//                 // onEditColumn={handleEditColumn}
//               />
//             </li>
//           );
//         })}
//       </ul>
//       <div>
//         <div>
//           {/* ====================================================================== */}

//           <div className={css.mainDashboard}>
//             {loading && <p>Loading...</p>}
//             <Toaster />
//             {error && <p>Error loading columns: {error.message}</p>}
//             <ul className={css.columns_list}>
//               {columnsData.map((column, index) => (
//                 <li className={css.item} key={index}>
//                   <Column
//                     column={column}
//                     onDeleteColumn={handleDeleteColumn}
//                     onEditColumn={handleEditColumn}
//                   />
//                 </li>
//               ))}
//             </ul>
//             <button
//               className={css.buttonAddColumn}
//               onClick={() => setIsModalOpen(true)}
//             >
//               <svg className={css.logoIcon} viewBox="0 0 32 32">
//                 <rect
//                   className={css.iconBackground}
//                   width="28"
//                   height="28"
//                   rx="6"
//                   ry="6"
//                 />
//                 <use
//                   href={sprite + '#icon-plus'}
//                   x="7"
//                   y="7"
//                   width="14"
//                   height="14"
//                 />
//               </svg>
//               Add another column
//             </button>

//             <Modal
//               isOpen={isModalOpen}
//               onRequestClose={() => setIsModalOpen(false)}
//               contentLabel="Add Column"
//               className={css.modal}
//               overlayClassName={css.overlay}
//             >
//               <button
//                 className={css.buttonAddColumn}
//                 onClick={() => setIsModalOpen(true)}
//               >
//                 {' '}
//                 <svg className={css.logoIcon} viewBox="0 0 32 32">
//                   <rect
//                     className={css.iconBackground}
//                     width="28"
//                     height="28"
//                     rx="6"
//                     ry="6"
//                   />
//                   <use
//                     href={sprite + '#icon-plus'}
//                     x="7"
//                     y="7"
//                     width="14"
//                     height="14"
//                   />
//                 </svg>{' '}
//                 Add another column{' '}
//               </button>
//             </Modal>
//           </div>
//         </div>
//       </div>

//       <div className={css.mainDashboard}>
//         {loading && <p>Loading...</p>}
//         <Toaster />
//         {error && <p>Error loading columns: {error.message}</p>}
//         {/* <ul className={css.columns_list}>
//           {columnsData.map((column, index) => (
//             <li key={index}>
//               <Column
//                 column={column}
//                 onDeleteColumn={handleDeleteColumn}
//                 onEditColumn={handleEditColumn}
//               />
//             </li>
//           ))}
//         </ul> */}
//         {/* <button
//           className={css.buttonAddColumn}
//           onClick={() => setIsModalOpen(true)}
//         >
//           {" "}
//           <svg className={css.logoIcon} viewBox="0 0 32 32">
//             <rect
//               className={css.iconBackground}
//               width="28"
//               height="28"
//               rx="6"
//               ry="6"
//             />
//             <use
//               href={sprite + "#icon-plus"}
//               x="7"
//               y="7"
//               width="14"
//               height="14"
//             />
//           </svg>{" "}
//           Add another column{" "}
//         </button> */}

//         <Modal
//           isOpen={isModalOpen}
//           onRequestClose={() => setIsModalOpen(false)}
//           contentLabel="Add Column"
//           className={css.modal}
//           overlayClassName={css.overlay}
//         >
//           <div className={css.modalContent}>
//             <button
//               onClick={() => setIsModalOpen(false)}
//               className={css.closeButton}
//             >
//               <svg className={css.closeIcon}>
//                 <use xlinkHref="#icon-close" />
//               </svg>
//             </button>
//             <h2 className={css.modalTitle}>Add Column</h2>
//             <form
//               onSubmit={e => {
//                 e.preventDefault();
//                 // handleAddColumn();
//                 form.reset();
//               }}
//               className={css.modalForm}
//             >
//               <input
//                 type="text"
//                 value={newColumnTitle}
//                 onChange={e => setNewColumnTitle(e.target.value)}
//                 placeholder="Column title"
//                 className={css.modalInput}
//               />
//               <button
//                 type="button"
//                 onClick={handleAddColumn}
//                 className={css.modalButton}
//               >
//                 Add
//               </button>
//             </form>
//           </div>
//         </Modal>
//       </div>
//     </div>
//   );
// }

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createColumn, deleteColumn } from '../../redux/columns/slice';
import Modal from 'react-modal';
import Column from '../Column/Column';
import css from './MainDashboard.module.css';
import {
  selectColumnsData,
  selectLoading,
  selectError,
} from '../../redux/columns/selectors';
import toast, { Toaster } from 'react-hot-toast';
import sprite from '../../assets/icons/Sprite.svg';
import ColumnItem from '../ColumnItem/ColumnItem';
import { selectBoard, selectOneBoard } from '../../redux/boards/selectors';
import { fetchColumns } from '../../redux/columns/operations';

import BeatLoader from 'react-spinners/BeatLoader';

import { getBoard } from '../../redux/boards/operations';

Modal.setAppElement('#root');

export default function MainDashboard() {
  const dispatch = useDispatch();
  const [idBoard, setIdBoat] = useState('');

  const board = useSelector(selectOneBoard);
  const boards = useSelector(selectBoard);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newColumnTitle, setNewColumnTitle] = useState('');

  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const columns = useSelector(selectColumnsData);

  useEffect(() => {
    Object.keys(board).length == 0
      ? setIdBoat(boards[0]._id)
      : setIdBoat(board._id);
  }, [boards, board]);

  if (idBoard === '') {
    setIdBoat(boards[0]._id);
    dispatch(getBoard(boards[0]._id));
  }

  useEffect(() => {
    dispatch(fetchColumns(idBoard));
  }, [dispatch, idBoard]);

  const handleAddColumn = e => {
    e.preventDefault();

    let newObj = {
      boardId: idBoard,
      title: newColumnTitle,
    };

    dispatch(createColumn(newObj));

    setIsModalOpen(false);
  };

  return (
    <div>
      <div className={css.box}>
        {loading ? (
          <div className={css.loading}>
            <BeatLoader color="#FFFFFF" />
          </div>
        ) : (
          <ul className={css.columnList}>
            {columns.map(item => {
              return (
                <li className={css.columnItem} key={item._id}>
                  <ColumnItem
                    id={item._id}
                    boardId={item.board}
                    owner={item.owner}
                    title={item.title}
                    idBoard={idBoard}
                  />
                </li>
              );
            })}
          </ul>
        )}
        <button
          className={css.buttonAddColumn}
          onClick={() => setIsModalOpen(true)}
        >
          <svg className={css.logoIcon} viewBox="0 0 32 32">
            <rect
              className={css.iconBackground}
              width="28"
              height="28"
              rx="6"
              ry="6"
            />
            <use
              href={sprite + '#icon-plus'}
              x="7"
              y="7"
              width="14"
              height="14"
            />
          </svg>
          Add another column
        </button>
      </div>
      <div>
        <div></div>
      </div>

      <div className={css.mainDashboardModal}>
        <Modal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          contentLabel="Add Column"
          className={css.modal}
          overlayClassName={css.overlay}
        >
          <div className={css.modalContent}>
            <button
              onClick={() => setIsModalOpen(false)}
              className={css.closeButton}
            >
              <svg className={css.closeIcon}>
                <use xlinkHref="#icon-close" />
              </svg>
            </button>
            <h2 className={css.modalTitle}>Add Column</h2>
            <form
              onSubmit={e => {
                e.preventDefault();
                // handleAddColumn();
                // form.reset();
              }}
              className={css.modalForm}
            >
              <input
                type="text"
                value={newColumnTitle}
                onChange={e => setNewColumnTitle(e.target.value)}
                placeholder="Column title"
                className={css.modalInput}
              />
              <button
                type="button"
                onClick={handleAddColumn}
                className={css.modalButton}
              >
                Add
              </button>
            </form>
          </div>
        </Modal>
      </div>
    </div>
  );
}
