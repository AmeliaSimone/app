import React from 'react'




const Icon = ({name, color}: any) => {
  return (
    <span className="material-icons" style={{color: color}}>{name}</span>
  );
};

export default Icon;