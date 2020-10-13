import React, { useState } from "react";

const CheckBox = ({ nationality, nationalities, onClick }) => {
  const [isChecked, setIsChecked] = useState(
    nationalities.includes(nationality)
  );

  const handleClick = (e) => {
    setIsChecked(e.target.checked);
    onClick(nationality, !e.target.checked);
  };

  return (
    <label htmlFor={`${nationality}-checkbox`}>
      <input
        id={`${nationality}-checkbox`}
        type="checkbox"
        checked={isChecked}
        onChange={handleClick}
      />
      <span>{nationality.toUpperCase()}</span>
    </label>
  );
};

export default CheckBox;
