
import { useState } from 'react';
import Modal from 'react-modal';
import css from './Column.module.css';
import {  deleteColumn, editColumn } from '../../redux/columns/slice';
import { useDispatch, useSelector } from 'react-redux';
import sprite from "../../assets/icons/Sprite.svg"


export default function Column({ column: { _id, title }, onDeleteColumn, onEditColumn }) {
  


  const [newTitle, setNewTitle] = useState(title);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  
  console.log(_id)


  const handleDelete = () => {
    onDeleteColumn(_id);
  };

  const handleEdit = () => {
    onEditColumn(_id, newTitle);
  };

  return (
    <div className={css.container_columns}>
    <div className={css.column} >
        <h2 className={css.column_title}>{title}</h2>
          <button className={css.deleteColumn} onClick={() => setIsModalOpen(true)}> <svg className={css.logoIcon}>
                <use href={sprite + "#icon-pencil-01"}></use>
              </svg> </button>
          <button className={css.deleteColumn} onClick={handleDelete}> <svg className={css.logoIcon}>
                <use href={sprite + "#icon-trash-04"}></use>
              </svg> </button>
    </div>

    <div className={css.container_cards}>
          <ul className={css.cards_list}>
            <li className={css.card}>Its card</li>
            <li className={css.card}>Its card</li>
            <li className={css.card}>Its card</li>
            <li className={css.card}>Its card</li>
            <li className={css.card}>Its card</li>
            <li className={css.card}>Its card</li>
            <li className={css.card}>Its card</li>
            <li className={css.card}>Its card</li>
            <li className={css.card}>Its card</li>
          </ul>
    </div>
    


      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Add Column"
      >
        <h2>Edit</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleEdit();
            setIsModalOpen(false);
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
    </div>
    
  );
}



