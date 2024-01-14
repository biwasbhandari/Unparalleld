import React from "react";
import ClothesItem from "@/components/items/CLothesItem";

interface ClothesData {
  id: number;
  name: string;
  image: string;
  price: number;
}

const clothesData: ClothesData[] = [
  { id: 1, name: "T-Shirt", image: "tshirt.jpg", price: 19.99 },
  { id: 2, name: "Jeans", image: "jeans.jpg", price: 39.99 },
  // Add more clothing items as needed
];

const ClothesBrowsingPage: React.FC = () => {
  return (
    <div className="clothes-browsing-page">
      <h1>Clothing Brand</h1>
      <div className="clothes-list">
        {clothesData.map((item) => (
          <ClothesItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default ClothesBrowsingPage;
