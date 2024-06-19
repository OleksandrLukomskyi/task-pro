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
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  ButtonBase,
} from '@mui/material';

import noBackground from '../../../../assets/icons/backgroundicon/no_background.jpg';
import background2 from '../../../../assets/icons/backgroundicon/background2.jpg';
import background3 from '../../../../assets/icons/backgroundicon/background3.jpg';
import background4 from '../../../../assets/icons/backgroundicon/background4.jpg';
import background5 from '../../../../assets/icons/backgroundicon/background5.jpg';
import background6 from '../../../../assets/icons/backgroundicon/background6.jpg';
import background7 from '../../../../assets/icons/backgroundicon/background7.jpg';
import background8 from '../../../../assets/icons/backgroundicon/background8.jpg';
import background9 from '../../../../assets/icons/backgroundicon/background9.jpg';
import background10 from '../../../../assets/icons/backgroundicon/background10.jpg';
import background11 from '../../../../assets/icons/backgroundicon/background11.jpg';
import background12 from '../../../../assets/icons/backgroundicon/background12.jpg';
import background13 from '../../../../assets/icons/backgroundicon/background13.jpg';
import background14 from '../../../../assets/icons/backgroundicon/background14.jpg';
import background15 from '../../../../assets/icons/backgroundicon/background15.jpg';
import background16 from '../../../../assets/icons/backgroundicon/background16.jpg';

const backgrounds = [
  { id: 'background1', path: noBackground, alt: 'No Background' },
  { id: 'background2', path: background2, alt: 'Background 2' },
  { id: 'background3', path: background3, alt: 'Background 3' },
  { id: 'background4', path: background4, alt: 'Background 4' },
  { id: 'background5', path: background5, alt: 'Background 5' },
  { id: 'background6', path: background6, alt: 'Background 6' },
  { id: 'background7', path: background7, alt: 'Background 7' },
  { id: 'background8', path: background8, alt: 'Background 8' },
  { id: 'background9', path: background9, alt: 'Background 9' },
  { id: 'background10', path: background10, alt: 'Background 10' },
  { id: 'background11', path: background11, alt: 'Background 11' },
  { id: 'background12', path: background12, alt: 'Background 12' },
  { id: 'background13', path: background13, alt: 'Background 13' },
  { id: 'background14', path: background14, alt: 'Background 14' },
  { id: 'background15', path: background15, alt: 'Background 15' },
  { id: 'background16', path: background16, alt: 'Background 16' },
];

const BackgroundSelector = ({ setSelectedBackground }) => {
  const [selectedBackgroundLocal, setSelectedBackgroundLocal] = useState('');

  const handleChange = id => {
    setSelectedBackground(id);
    setSelectedBackgroundLocal(id);
  };

  return (
    <FormControl component="fieldset" sx={{ mt: 2 }}>
      <FormLabel
        component="legend"
        style={{
          marginBottom: '10px',
          color: 'var(--text-color)',
        }}
      >
        Choose a Background
      </FormLabel>
      <RadioGroup
        row
        value={selectedBackgroundLocal}
        onChange={e => handleChange(e.target.value)}
        style={{
          marginLeft: '10px',
        }}
      >
        {backgrounds.map(background => (
          <FormControlLabel
            key={background.id}
            value={background.id}
            control={<Radio style={{ display: 'none' }} />}
            label={
              <ButtonBase
                onClick={() => handleChange(background.id)}
                className={
                  selectedBackgroundLocal === background.id
                    ? 'selected-background'
                    : ''
                }
              >
                <img
                  src={background.path}
                  alt={background.alt}
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: '6px',
                    cursor: 'pointer',
                    padding: '1px',
                  }}
                />
              </ButtonBase>
            }
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default BackgroundSelector;
