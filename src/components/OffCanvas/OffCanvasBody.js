import React from "react";
import PropTypes from "prop-types";

const OffCanvasBody = ({ children }) => {
  return <div className="offcanvas__body">{children}</div>;
};

OffCanvasBody.propTypes = {
  children: PropTypes.node.isRequired,
};

export default OffCanvasBody;
