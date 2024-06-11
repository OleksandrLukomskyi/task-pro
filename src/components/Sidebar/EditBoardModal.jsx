// import React, { useState } from 'react';
// import { Modal, Button, Label, TextInput } from 'flowbite-react';

// const EditBoardModal = ({ board, onSave, onClose, onDelete }) => {
//   const [title, setTitle] = useState(board.title);

//   const handleSave = () => {
//     onSave({ ...board, title });
//     onClose();
//   };

//   const handleDelete = () => {
//     onDelete(board.id);
//     onClose();
//   };

//   return (
//     <Modal show={true} onClose={onClose}>
//       <Modal.Header>Edit Board</Modal.Header>
//       <Modal.Body>
//         <form className="space-y-6">
//           <div>
//             <Label htmlFor="title" value="Title" />
//             <TextInput
//               id="title"
//               type="text"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               required
//             />
//           </div>
//         </form>
//       </Modal.Body>
//       <Modal.Footer>
//         <Button onClick={handleSave}>Save Changes</Button>
//         <Button color="failure" onClick={handleDelete}>Delete</Button>
//       </Modal.Footer>
//     </Modal>
//   );
// };

// export default EditBoardModal;


import React, { useState } from 'react';
import { Modal, Button, Label, TextInput } from 'flowbite-react';

const EditBoardModal = ({ board, onSave, onClose, onDelete }) => {
  const [title, setTitle] = useState(board.title);

  const handleSave = () => {
    onSave({ ...board, title });
    onClose();
  };

  const handleDelete = () => {
    onDelete(board.id);
    onClose();
  };

  return (
    <Modal show={true} onClose={onClose}>
      <Modal.Header>Edit Board</Modal.Header>
      <Modal.Body>
        <form className="space-y-6">
          <div>
            <Label htmlFor="title" value="Title" />
            <TextInput
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleSave}>Save Changes</Button>
        <Button color="failure" onClick={handleDelete}>Delete</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditBoardModal;


// import React, { useState } from 'react';
// import { Modal, Button, TextInput, Label, Radio } from 'flowbite-react';

// const EditBoardModal = ({ show, onClose, onSave, board }) => {
//   const [title, setTitle] = useState(board.title);
//   const [icon, setIcon] = useState(board.icon);
//   const [background, setBackground] = useState(board.background);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (title.trim() === '') {
//       alert('Title is required');
//       return;
//     }
//     onSave({ ...board, title, icon, background });
//     onClose();
//   };

//   return (
//     <Modal show={show} onClose={onClose}>
//       <Modal.Header>Edit Board</Modal.Header>
//       <Modal.Body>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <Label htmlFor="title">Title</Label>
//             <TextInput
//               id="title"
//               type="text"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <Label>Icons</Label>
//             <div className="flex">
//               <Radio
//                 id="icon1"
//                 name="icon"
//                 value="icon1"
//                 checked={icon === 'icon1'}
//                 onChange={(e) => setIcon(e.target.value)}
//               />
//               <Label htmlFor="icon1">Icon 1</Label>
//               <Radio
//                 id="icon2"
//                 name="icon"
//                 value="icon2"
//                 checked={icon === 'icon2'}
//                 onChange={(e) => setIcon(e.target.value)}
//               />
//               <Label htmlFor="icon2">Icon 2</Label>
//             </div>
//           </div>
//           <div className="mb-4">
//             <Label>Backgrounds</Label>
//             <div className="flex">
//               <Radio
//                 id="no-background"
//                 name="background"
//                 value="no-background"
//                 checked={background === 'no-background'}
//                 onChange={(e) => setBackground(e.target.value)}
//               />
//               <Label htmlFor="no-background">No Background</Label>
//               <Radio
//                 id="background1"
//                 name="background"
//                 value="background1"
//                 checked={background === 'background1'}
//                 onChange={(e) => setBackground(e.target.value)}
//               />
//               <Label htmlFor="background1">Background 1</Label>
//             </div>
//           </div>
//           <Button type="submit">Save Changes</Button>
//         </form>
//       </Modal.Body>
//     </Modal>
//   );
// };

// export default EditBoardModal;
