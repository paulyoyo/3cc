import React from "react";
import PropTypes from "prop-types";

const OffCanvasHeader = ({ children, onClose }) => {
  return (
    <div className="offcanvas__header">
      <div className="offcanvas__header-left">{children}</div>
      <div className="offcanvas__header-right">
        <button
          type="button"
          className="offcanvas__close"
          onClick={onClose}
          aria-label="Close menu"
        >
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  );
};

OffCanvasHeader.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default OffCanvasHeader;
