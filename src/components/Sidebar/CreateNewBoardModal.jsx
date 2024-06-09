import React, { useState } from 'react';
import { Modal, Button, TextInput, Label, Radio } from 'flowbite-react';

const CreateBoardModal = ({ show, onClose, onCreate }) => {
  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('default-icon');
  const [background, setBackground] = useState('no-background');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === '') {
      alert('Title is required');
      return;
    }
    onCreate({ id: Date.now(), title, icon, background });
    onClose();
  };

  return (
    <Modal show={show} onClose={onClose}>
      <Modal.Header>Create New Board</Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <Label htmlFor="title">Title</Label>
            <TextInput
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <Label>Icons</Label>
            <div className="flex">
              <Radio
                id="icon1"
                name="icon"
                value="icon1"
                checked={icon === 'icon1'}
                onChange={(e) => setIcon(e.target.value)}
              />
              <Label htmlFor="icon1">Icon 1</Label>
              <Radio
                id="icon2"
                name="icon"
                value="icon2"
                checked={icon === 'icon2'}
                onChange={(e) => setIcon(e.target.value)}
              />
              <Label htmlFor="icon2">Icon 2</Label>
            </div>
          </div>
          <div className="mb-4">
            <Label>Backgrounds</Label>
            <div className="flex">
              <Radio
                id="no-background"
                name="background"
                value="no-background"
                checked={background === 'no-background'}
                onChange={(e) => setBackground(e.target.value)}
              />
              <Label htmlFor="no-background">No Background</Label>
              <Radio
                id="background1"
                name="background"
                value="background1"
                checked={background === 'background1'}
                onChange={(e) => setBackground(e.target.value)}
              />
              <Label htmlFor="background1">Background 1</Label>
            </div>
          </div>
          <Button type="submit">Create</Button>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default CreateBoardModal;
