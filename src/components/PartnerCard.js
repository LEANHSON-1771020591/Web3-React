import React, { useState } from "react";

const PartnerCard = ({ imgSrc, infoText }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const imgStyle = {
    transform: isHovered ? "translateY(-30px)" : "translateY(0)",
    opacity: isHovered ? "0" : "1",
    transition: "transform 0.3s ease-out, opacity 0.3s ease-out", // Thêm transition cho mượt mà
  };

  const infoClassName = `infomation ${isHovered ? "show" : ""}`;

  return (
    <div
      className="partner"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={imgSrc} alt="Partner Logo" style={imgStyle} />
      <div className={infoClassName}>
        <div dangerouslySetInnerHTML={{ __html: infoText }} />
      </div>
    </div>
  );
};

export default PartnerCard;
