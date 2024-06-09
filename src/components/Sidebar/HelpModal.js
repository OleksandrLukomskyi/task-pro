import React, { useState } from 'react';
import { Modal, Button, Label, TextInput, Textarea } from 'flowbite-react';

const HelpModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');

  const handleSend = () => {
    if (email.trim() && comment.trim()) {
      // отправка запроса на сервер для отправки сообщения
      console.log('Sending help request:', { email, comment });
      setShowModal(false);
      setEmail('');
      setComment('');
    } else {
      alert('All fields are required');
    }
  };

  return (
    <>
      <Button onClick={() => setShowModal(true)}>Need Help</Button>
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <Modal.Header>Need Help</Modal.Header>
        <Modal.Body>
          <form className="space-y-6">
            <div>
              <Label htmlFor="email" value="Email" />
              <TextInput
                id="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-[352px] h-[49px]"
              />
            </div>
            <div>
              <Label htmlFor="comment" value="Comment" />
              <Textarea
                id="comment"
                placeholder="Comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                required
                className="w-[352px] h-[120px]"
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleSend} className="w-[352px] h-[49px]">Send</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default HelpModal;
