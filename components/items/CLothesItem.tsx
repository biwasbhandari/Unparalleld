import React from "react";

interface ClothesItemProps {
  id: number;
  name: string;
  image: string;
  price: number;
}

const ClothesItem: React.FC<ClothesItemProps> = ({
  id,
  name,
  image,
  price,
}) => {
  return (
    <div className="clothes-item">
      <img src={image} alt={name} />
      <div className="item-details">
        <h3>{name}</h3>
        <p>${price}</p>
        {/* Add more details if needed */}
      </div>
    </div>
  );
};

export default ClothesItem;
