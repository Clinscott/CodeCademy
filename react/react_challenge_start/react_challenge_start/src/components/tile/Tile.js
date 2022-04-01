import React from "react";

export const Tile = ({prop}) => {

  return (
    <div className="tile-container">
      {Object.values(prop).map((value, index)=>(
        <p key={index} className={`${index === 0 ? "tile-title" : ""} tile`}>
          {value}
        </p>
      ))}
    </div>
  );
};
