import React from "react";
import PropTypes from "prop-types";
import "./OffCanvas.scss";

const OffCanvas = ({ children, isOpen, onClose }) => {
  return (
    <div className={`offcanvas ${isOpen ? "offcanvas--open" : ""}`} onClick={onClose}>
      <div className="offcanvas__inner" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

OffCanvas.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default OffCanvas;
