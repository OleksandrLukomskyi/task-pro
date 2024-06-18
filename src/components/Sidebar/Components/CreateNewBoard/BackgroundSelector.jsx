// import { useState } from 'react';
// import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';

// const backgrounds = [
//   { id: 'background1', path: '../../../../assets/icons/backgroundicon/no_background.jpg', alt: '' },
//   { id: 'background2', path: '../../../../assets/icons/backgroundicon/background2.jpg', alt: '' },
//   { id: 'background3', path: '../../../../assets/icons/backgroundicon/background3.jpg', alt: '' },
//   { id: 'background4', path: '../../../../assets/icons/backgroundicon/background4.jpg', alt: '' },
//   { id: 'background5', path: '../../../../assets/icons/backgroundicon/background5.jpg', alt: '' },
//   { id: 'background6', path: '../../../../assets/icons/backgroundicon/background6.jpg', alt: '' },
//   { id: 'background7', path: '../../../../assets/icons/backgroundicon/background7.jpg', alt: '' },
//   { id: 'background8', path: '../../../../assets/icons/backgroundicon/background8.jpg', alt: '' },
//   { id: 'background9', path: '../../../../assets/icons/backgroundicon/background9.jpg', alt: '' },
//   { id: 'background10', path: '../../../../assets/icons/backgroundicon/background10.jpg', alt: '' },
//   { id: 'background11', path: '../../../../assets/icons/backgroundicon/background11.jpg', alt: '' },
//   { id: 'background12', path: '../../../../assets/icons/backgroundicon/background12.jpg', alt: '' },
//   { id: 'background13', path: '../../../../assets/icons/backgroundicon/background13.jpg', alt: '' },
//   { id: 'background14', path: '../../../../assets/icons/backgroundicon/background14.jpg', alt: '' },
//   { id: 'background15', path: '../../../../assets/icons/backgroundicon/background15.jpg', alt: '' },
//   { id: 'background16', path: '../../../../assets/icons/backgroundicon/background16.jpg', alt: '' },
//   // Добавьте другие фоны аналогично
// ];

// const BackgroundSelector = ({ setSelectedBackground }) => {
//     const [selectedBackgroundLocal, setSelectedBackgroundLocal] = useState('');
  
//     const handleChange = (e) => {
//       const selectedBackgroundId = e.target.value;
//       setSelectedBackground(selectedBackgroundId);
//       setSelectedBackgroundLocal(selectedBackgroundId); // Локальное обновление состояния для отображения текущего выбранного фона
//     };
  
//     return (
//       <FormControl component="fieldset" sx={{ mt: 2 }}>
//         <FormLabel component="legend">Choose a Background</FormLabel>
//         <RadioGroup row value={selectedBackgroundLocal} onChange={handleChange}>
//           <FormControlLabel
//             value=""
//             control={<Radio />}
//             label="no background"
//           />
//           {backgrounds.map((background) => (
//             <FormControlLabel
//               key={background.id}
//               value={background.id}
//               control={<Radio />}
//               label={<img src={background.path} alt={background.alt} style={{ width: 50, height: 50 }} />}
//             />
//           ))}
//         </RadioGroup>
//       </FormControl>
//     );
//   };

// export default BackgroundSelector;

import { useState } from 'react';
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, ButtonBase } from '@mui/material';

const backgrounds = [
  { id: 'background1', path: '../../../../assets/icons/backgroundicon/no_background.jpg', alt: '' },
  { id: 'background2', path: '../../../../assets/icons/backgroundicon/background2.jpg', alt: '' },
  { id: 'background3', path: '../../../../assets/icons/backgroundicon/background3.jpg', alt: '' },
  { id: 'background4', path: '../../../../assets/icons/backgroundicon/background4.jpg', alt: '' },
  { id: 'background5', path: '../../../../assets/icons/backgroundicon/background5.jpg', alt: '' },
  { id: 'background6', path: '../../../../assets/icons/backgroundicon/background6.jpg', alt: '' },
  { id: 'background7', path: '../../../../assets/icons/backgroundicon/background7.jpg', alt: '' },
  { id: 'background8', path: '../../../../assets/icons/backgroundicon/background8.jpg', alt: '' },
  { id: 'background9', path: '../../../../assets/icons/backgroundicon/background9.jpg', alt: '' },
  { id: 'background10', path: '../../../../assets/icons/backgroundicon/background10.jpg', alt: '' },
  { id: 'background11', path: '../../../../assets/icons/backgroundicon/background11.jpg', alt: '' },
  { id: 'background12', path: '../../../../assets/icons/backgroundicon/background12.jpg', alt: '' },
  { id: 'background13', path: '../../../../assets/icons/backgroundicon/background13.jpg', alt: '' },
  { id: 'background14', path: '../../../../assets/icons/backgroundicon/background14.jpg', alt: '' },
  { id: 'background15', path: '../../../../assets/icons/backgroundicon/background15.jpg', alt: '' },
  { id: 'background16', path: '../../../../assets/icons/backgroundicon/background16.jpg', alt: '' },
  // Добавьте другие фоны аналогично
];

const BackgroundSelector = ({ setSelectedBackground }) => {
  const [selectedBackgroundLocal, setSelectedBackgroundLocal] = useState('');

  const handleChange = (id) => {
    setSelectedBackground(id);
    setSelectedBackgroundLocal(id);
  };
 
  return (
    <FormControl component="fieldset" sx={{ mt: 2 }}>
      <FormLabel component="legend">Choose a Background</FormLabel>
      <RadioGroup row value={selectedBackgroundLocal} onChange={(e) => handleChange(e.target.value)}>
        {backgrounds.map((background) => (
          <FormControlLabel
            key={background.id}
            value={background.id}
            control={<Radio style={{ display: 'none' }} />}  // Скрыть радиокнопку
            label={
              <ButtonBase
                onClick={() => handleChange(background.id)}
                className={selectedBackgroundLocal === background.id ? 'selected-background' : ''}
              >
                <img src={background.path} alt={background.alt} style={{ width: 28, height: 28, borderRadius: '50%', cursor: 'pointer' }} />
              </ButtonBase>
            }
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default BackgroundSelector;
