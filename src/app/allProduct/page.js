import ShoesCard from "@/components/UI/ShoesCard";
import React from "react";

const allProductPage = async () => {
  const res = await fetch("http://localhost:5000/shoes", {
    cache: "no-store",
  });
  const shoes = await res.json();
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {shoes.map((shoe) => (
        <ShoesCard key={shoe.id} shoe={shoe}></ShoesCard>
      ))}
    </div>
  );
};

export default allProductPage;
