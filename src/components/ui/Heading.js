import React from "react";

const Heading = ({ title, subtitle, centered, white, className = "" }) => {
  const alignmentClass = centered ? "text-center" : "text-left";
  const colorClass = white ? "text-white" : "";

  return (
    <div className={`${alignmentClass} ${className}`}>
      {title && <h2 className={colorClass}>{title}</h2>}
      {subtitle && <p className={`text-[24px] my-2 ${colorClass}`}>{subtitle}</p>}
    </div>
  );
};

export default Heading;
