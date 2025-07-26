import React from "react";
import Icon from "../Icon/Icon";
import "../csshomepage/TopBaar.css"

function Topbar({ onClose }) {
  return (
    <div className="top-bar">
      <p>
        Sign up and get 20% off to your first order. <span>Sign Up Now</span>
      </p>
      <span className="close-icon" onClick={onClose}>
        <Icon icon="CloseIcon" />
      </span>
    </div>
  );
}
export default Topbar;