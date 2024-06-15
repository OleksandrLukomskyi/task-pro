import { useState } from 'react';
import Modal from 'react-modal';
import css from './Column.module.css';
import {  deleteColumn, editColumn } from '../../redux/columns/slice';
import { useDispatch, useSelector } from 'react-redux';


export default function Column({ column: {title, _id} }) {
  


  const [newTitle, setNewTitle] = useState(title);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  
  console.log(_id)


  const handleDeleteColumn = (_id) => {
    dispatch(deleteColumn(_id));
  };

  const handleEditColumn = (_id, title) => {
    dispatch(editColumn({ _id, title }));
  };


  return (
    <div className={css.column} >
        <h2>{title}</h2>
          <button onClick={() => setIsModalOpen(true)}>Edit</button>

        <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Add Column"
      >
        <h2>Add Column</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleEditColumn(_id, newTitle);
          }}
        >
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            placeholder="Column title"
          />
          <button type="submit">Add</button>
        </form>
        <button onClick={() => setIsModalOpen(false)}>Close</button>
      </Modal>

      <button onClick={() => handleDeleteColumn(_id)}>Delete</button>
    </div>
  );
}


