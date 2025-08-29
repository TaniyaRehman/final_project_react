import React from "react";

function RightDemoButton({ onClick }) {
  return (
    <div className="rn-right-demo">
      <button className="demo-button" onClick={onClick}>
        <span className="text">40+ Demos</span>
      </button>
    </div>
  );
}

export default RightDemoButton;
