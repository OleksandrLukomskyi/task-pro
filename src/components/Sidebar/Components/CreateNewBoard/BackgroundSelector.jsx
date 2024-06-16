import { useState } from 'react';
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';

const backgrounds = [
  { id: 'background1', path: '../../../../Origins/Desktop-1.jpg', alt: '' },
  { id: 'background2', path: '../../../../Origins/Desktop-2.jpg', alt: '' },
  { id: 'background3', path: '../../../../Origins/Desktop-3.jpg', alt: '' },
  { id: 'background4', path: '../../../../Origins/Desktop-4.jpg', alt: '' },
  { id: 'background5', path: '../../../../Origins/Desktop-5.jpg', alt: '' },
  { id: 'background6', path: '../../../../Origins/Desktop-6.jpg', alt: '' },
  { id: 'background7', path: '../../../../Origins/Desktop-7.jpg', alt: '' },
  { id: 'background8', path: '../../../../Origins/Desktop-8.jpg', alt: '' },
  { id: 'background9', path: '../../../../Origins/Desktop-9.jpg', alt: '' },
  { id: 'background10', path: '../../../../Origins/Desktop-10.jpg', alt: '' },
  { id: 'background11', path: '../../../../Origins/Desktop-11.jpg', alt: '' },
  { id: 'background12', path: '../../../../Origins/Desktop-12.jpg', alt: '' },
  { id: 'background13', path: '../../../../Origins/Desktop-13.jpg', alt: '' },
  { id: 'background14', path: '../../../../Origins/Desktop-14.jpg', alt: '' },
  { id: 'background15', path: '../../../../Origins/Desktop-15.jpg', alt: '' },
  // Добавьте другие фоны аналогично
];

const BackgroundSelector = ({ setSelectedBackground }) => {
    const [selectedBackgroundLocal, setSelectedBackgroundLocal] = useState('');
  
    const handleChange = (e) => {
      const selectedBackgroundId = e.target.value;
      setSelectedBackground(selectedBackgroundId);
      setSelectedBackgroundLocal(selectedBackgroundId); // Локальное обновление состояния для отображения текущего выбранного фона
    };
  
    return (
      <FormControl component="fieldset" sx={{ mt: 2 }}>
        <FormLabel component="legend">Choose a Background</FormLabel>
        <RadioGroup row value={selectedBackgroundLocal} onChange={handleChange}>
          <FormControlLabel
            value=""
            control={<Radio />}
            label="no background"
          />
          {backgrounds.map((background) => (
            <FormControlLabel
              key={background.id}
              value={background.id}
              control={<Radio />}
              label={<img src={background.path} alt={background.alt} style={{ width: 50, height: 50 }} />}
            />
          ))}
        </RadioGroup>
      </FormControl>
    );
  };

export default BackgroundSelector;
