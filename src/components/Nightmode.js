import React from 'react';
import StyledNightMode from './styles/StyledNightMode';

const NightMode = ({ nightMode, nightModeCallback }) => {
  return (
    <StyledNightMode>
      <span>Nightmode: </span>
      <label className="switch">
        <input
          type="checkbox"
          checked={nightMode}
          onChange={nightModeCallback}
        />
        <span className="slider round" />
      </label>
    </StyledNightMode>
  );
};

export default NightMode;
