import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createColumn, fetchColumns } from '../../redux/columns/slice';
import Modal from 'react-modal';
import Column from '../Column/Column';
import css from './MainDashboard.module.css';
import { selectColumnsData, selectLoading, selectError } from "../../redux/columns/selectors";
import toast, { Toaster } from 'react-hot-toast';


Modal.setAppElement('#root');

export default function MainDashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newColumnTitle, setNewColumnTitle] = useState('');
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const currentBoardId = '666b2baa72f2dcf6bb1959d1';
  const columnsData = useSelector(selectColumnsData);
 

  
  useEffect(() => {
    
   dispatch(fetchColumns());

  }, [dispatch]);

 

  const handleAddColumn = () => {
    if (newColumnTitle.trim() && currentBoardId) {
      dispatch(createColumn({ title: newColumnTitle, boardId: currentBoardId }))
        .then(() => {
          toast.success('Column created successfully!');
        })
        .catch(() => {
          toast.error('Failed to create column. Please try again.');
        });
        setNewColumnTitle('');
        setIsModalOpen(false);
    } else {
      console.log('Board ID is missing or invalid');
    }
  };

  
  return (
    <div className={css.mainDashboard}>
      {loading && <p>Loading...</p>}
      <Toaster/>
      {error && <p>Error loading columns: {error.message}</p>}
      <ul>
        {columnsData.map((column, index) => (
          <li key={index}>
            <Column
              column={column}
            />
          </li>
        ))}
      </ul>
      
      <button onClick={() => setIsModalOpen(true)}> <svg className={css.icon_plus}>
          <use xlinkHref="#icon-plus" />
        </svg> Add another column  </button>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Add Column"
      >
        <h2>Add Column</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleAddColumn();
          }}
        >
          <input
            type="text"
            value={newColumnTitle}
            onChange={(e) => setNewColumnTitle(e.target.value)}
            placeholder="Column title"
          />
          <button type="submit">Add</button>
        </form>
        <button onClick={() => setIsModalOpen(false)}>Close</button>
      </Modal>
    </div>
  );
}


