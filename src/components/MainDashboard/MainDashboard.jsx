import { useState, useEffect  } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createColumn, fetchColumns } from '../../redux/columns/slice';
import Modal from 'react-modal';
import Column from '../Column/Column';
import css from './MainDashboard.module.css';
import { selectColumnsData, selectLoading, selectError } from "../../redux/columns/selectors";
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import sprite from "../../assets/icons/Sprite.svg"


Modal.setAppElement('#root');

export default function MainDashboard() {
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newColumnTitle, setNewColumnTitle] = useState('');
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const boardId = '666b2baa72f2dcf6bb1959d1';
  const columns = useSelector(selectColumnsData);
  const [columnsData, setColumnsData] = useState([]);

 
  const fetchColumns = async (boardId) => {
    try {
      const response = await axios.get(
        `https://project-back-codewave1-rqmw.onrender.com/api/columns/?boardId=${boardId}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NmI1NTYxNDhiMTY4ZTdjMWM3NWQ2MSIsImVtYWlsIjoicDNAcC5jb20iLCJpYXQiOjE3MTgzMTAyNDEsImV4cCI6MTcxOTE3NDI0MX0.MB7dXShXVl1aqxvRkxsMvhMAYiuk0LbHjLTeAPOQXdE",
          },
        }
      );
      console.log(response.data);
      setColumnsData(response.data.columns);
    } catch (error) {
      console.error("Fetch columns error:", error);
      setColumnsData([]);
    }
  };
  
  useEffect(() => {
    fetchColumns(boardId); 
  }, [boardId]);

  console.log(columnsData);

  const handleAddColumn = async () => {
    if (newColumnTitle.trim() && boardId) {
      try {
        const response = await axios.post(
          `https://project-back-codewave1-rqmw.onrender.com/api/columns/`,
          { title: newColumnTitle, boardId: boardId },
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NmI1NTYxNDhiMTY4ZTdjMWM3NWQ2MSIsImVtYWlsIjoicDNAcC5jb20iLCJpYXQiOjE3MTgzMTAyNDEsImV4cCI6MTcxOTE3NDI0MX0.MB7dXShXVl1aqxvRkxsMvhMAYiuk0LbHjLTeAPOQXdE",
            },
          }
        );
        setColumnsData((prevColumns) => [...prevColumns, response.data.column]);
        toast.success('Column created successfully!');
      } catch (error) {
        toast.error('Failed to create column. Please try again.');
      }
      setNewColumnTitle('');
      setIsModalOpen(false);
    } else {
      console.log('Board ID is missing or invalid');
    }
  };


  const handleDeleteColumn = async (_id) => {
    try {
      await axios.delete(`https://project-back-codewave1-rqmw.onrender.com/api/columns/${_id}`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NmI1NTYxNDhiMTY4ZTdjMWM3NWQ2MSIsImVtYWlsIjoicDNAcC5jb20iLCJpYXQiOjE3MTgzMTAyNDEsImV4cCI6MTcxOTE3NDI0MX0.MB7dXShXVl1aqxvRkxsMvhMAYiuk0LbHjLTeAPOQXdE",
        },
      });
      setColumnsData((prevColumns) => prevColumns.filter((column) => column._id !== _id));
      toast.success('Column deleted successfully!');
    } catch (error) {
      toast.error('Failed to delete column. Please try again.');
    }
  };

  const handleEditColumn = async (_id, title) => {
    try {
      const response = await axios.put(
        `https://project-back-codewave1-rqmw.onrender.com/api/columns/${_id}`,
        { title },
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NmI1NTYxNDhiMTY4ZTdjMWM3NWQ2MSIsImVtYWlsIjoicDNAcC5jb20iLCJpYXQiOjE3MTgzMTAyNDEsImV4cCI6MTcxOTE3NDI0MX0.MB7dXShXVl1aqxvRkxsMvhMAYiuk0LbHjLTeAPOQXdE",
          },
        }
      );
      setColumnsData((prevColumns) =>
        prevColumns.map((column) => (column._id === _id ? { ...column, title: response.data.column.title } : column))
      );
      toast.success('Column updated successfully!');
    } catch (error) {
      toast.error('Failed to update column. Please try again.');
    }
    setIsModalOpen(false);
  };


  
  

  
  return (
    <div className={css.mainDashboard}>
      {loading && <p>Loading...</p>}
      <Toaster/>
      {error && <p>Error loading columns: {error.message}</p>}
      <ul className={css.columns_list}>
        {columnsData.map((column, index) => (
          <li key={index}>
            <Column
              column={column}
              onDeleteColumn={handleDeleteColumn}
              onEditColumn={handleEditColumn}
            />
          </li>
        ))}
      </ul>
      <button className={css.buttonAddColumn} onClick={() => setIsModalOpen(true)}> <svg className={css.logoIcon} viewBox="0 0 32 32">
        <rect className={css.iconBackground} width="28" height="28" rx="6" ry="6" />
        <use href={sprite + "#icon-plus"} x="7" y="7" width="14" height="14" />
    </svg> Add another column </button>

    <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Add Column"
        className={css.modal} 
        overlayClassName={css.overlay} 
      >
        <div className={css.modalContent}>
          <button onClick={() => setIsModalOpen(false)} className={css.closeButton}>
            <svg className={css.closeIcon}>
              <use xlinkHref="#icon-close" />
            </svg>
          </button>
          <h2 className={css.modalTitle}>Add Column</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleAddColumn();
            }}
            className={css.modalForm}
          >
            <input
              type="text"
              value={newColumnTitle}
              onChange={(e) => setNewColumnTitle(e.target.value)}
              placeholder="Column title"
              className={css.modalInput}
            />
            <button type="submit" className={css.modalButton}>Add</button>
          </form>
        </div>
      </Modal>
    </div>
  );
  
}

 

 



