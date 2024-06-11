// // src/components/CreateNewBoardButton.js
// import React, { useState } from 'react';
// import { Modal, Button, Label, TextInput, Radio } from 'flowbite-react';

// const CreateNewBoardButton = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [title, setTitle] = useState('');
//   const [icon, setIcon] = useState('icon1');
//   const [background, setBackground] = useState('no-background');

//   const handleCreate = () => {
//     if (title.trim()) {
//       // отправка запроса на сервер для создания новой доски
//       console.log('Creating new board with title:', title);
//       setShowModal(false);
//       setTitle('');
//       setIcon('icon1');
//       setBackground('no-background');
//     } else {
//       alert('Title cannot be empty');
//     }
//   };

//   return (
//     <>
//       <Button onClick={() => setShowModal(true)}>Create New Board</Button>
//       <Modal show={showModal} onClose={() => setShowModal(false)}>
//         <Modal.Header>New Board</Modal.Header>
//         <Modal.Body>
//           <form className="space-y-6">
//             <div>
//               <Label htmlFor="title" value="Title" />
//               <TextInput
//                 id="title"
//                 type="text"
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//                 required
//               />
//             </div>
//             <div>
//               <Label value="Icons" />
//               <div className="flex space-x-2">
//                 <Radio
//                   id="icon1"
//                   name="icon"
//                   value="icon1"
//                   checked={icon === 'icon1'}
//                   onChange={() => setIcon('icon1')}
//                 />
//                 <Radio
//                   id="icon2"
//                   name="icon"
//                   value="icon2"
//                   checked={icon === 'icon2'}
//                   onChange={() => setIcon('icon2')}
//                 />
//                 {/* Добавьте больше радио кнопок для других иконок */}
//               </div>
//             </div>
//             <div>
//               <Label value="Backgrounds" />
//               <div className="flex space-x-2">
//                 <Radio
//                   id="no-background"
//                   name="background"
//                   value="no-background"
//                   checked={background === 'no-background'}
//                   onChange={() => setBackground('no-background')}
//                 />
//                 <Radio
//                   id="background1"
//                   name="background"
//                   value="background1"
//                   checked={background === 'background1'}
//                   onChange={() => setBackground('background1')}
//                 />
//                 {/* Добавьте больше радио кнопок для других фонов */}
//               </div>
//             </div>
//           </form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button onClick={handleCreate}>Create</Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// };

// export default CreateNewBoardButton;

import React, { useState } from 'react';
import { Modal, Button, Label, TextInput } from 'flowbite-react';

const ICONS = [
  { id: 'icon1', src: 'path/to/icon1.svg', alt: 'Icon 1' },
  { id: 'icon2', src: 'path/to/icon2.svg', alt: 'Icon 2' },
  // Добавьте больше иконок по необходимости
];

const BACKGROUNDS = [
  { id: 'background', name: 'Background', src: 'path/to/background.jpg' },
  { id: 'background1', name: 'Background 1', src: 'path/to/background1.jpg' },
  { id: 'background2', name: 'Background 2', src: 'path/to/background2.jpg' },
  { id: 'background3', name: 'Background 3', src: 'path/to/background3.jpg' },
  // Добавьте больше фонов по необходимости
];

const CreateNewBoardButton = () => {
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState('');
  const [selectedIcon, setSelectedIcon] = useState(ICONS[0].id);
  const [selectedBackground, setSelectedBackground] = useState(BACKGROUNDS[0].id);

  const handleCreate = () => {
    if (title.trim()) {
      // отправка запроса на сервер для создания новой доски
      console.log('Creating new board with title:', title);
      setShowModal(false);
      setTitle('');
      setSelectedIcon(ICONS[0].id);
      setSelectedBackground(BACKGROUNDS[0].id);
    } else {
      alert('Title cannot be empty');
    }
  };

  return (
    <>
      <Button onClick={() => setShowModal(true)}>+Create New Board</Button>
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <Modal.Header>New Board</Modal.Header>
        <Modal.Body>
          <form className="space-y-6">
            <div>
              <Label htmlFor="title" value="" />
              <TextInput
                id="title"
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div>
              <Label value="Icons" />
              <div className="flex space-x-2">
                {ICONS.map((iconItem) => (
                  <div
                    key={iconItem.id}
                    className={`p-2 cursor-pointer border ${selectedIcon === iconItem.id ? 'border-blue-500' : 'border-transparent'}`}
                    onClick={() => setSelectedIcon(iconItem.id)}
                  >
                    <img src={iconItem.src} alt={iconItem.alt} className="h-6 w-6" />
                  </div>
                ))}
              </div>
            </div>
            <div>
              <Label value="Backgrounds" />
              <div className="flex space-x-2">
                {BACKGROUNDS.map((backgroundItem) => (
                  <div
                    key={backgroundItem.id}
                    className={`p-2 cursor-pointer border ${selectedBackground === backgroundItem.id ? 'border-blue-500' : 'border-transparent'}`}
                    onClick={() => setSelectedBackground(backgroundItem.id)}
                  >
                    {backgroundItem.src ? (
                      <img src={backgroundItem.src} alt={backgroundItem.name} className="h-6 w-6" />
                    ) : (
                      <span>{backgroundItem.name}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleCreate}>Create</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CreateNewBoardButton;


// import React, { useState } from 'react';
// import CreateNewBoardModal from './CreateNewBoardModal'; // Создайте компонент модального окна

// const CreateNewBoardButton = () => {
//   const [showModal, setShowModal] = useState(false);

//   return (
//     <div>
//       <button onClick={() => setShowModal(true)}>Create New Board</button>
//       {showModal && <CreateNewBoardModal onClose={() => setShowModal(false)} />}
//     </div>
//   );
// };

// export default CreateNewBoardButton;
