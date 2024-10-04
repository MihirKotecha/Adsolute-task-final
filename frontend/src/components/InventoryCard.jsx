import React from "react";

const InventoryCard = () => {
  return (
    <div class="rounded overflow-hidden shadow-lg m-4">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Item - 1</div>
        <p class="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
      <div class="p-2 m-2 bg-slate-400 flex items-center justify-center ">
        Quantity
      </div>
    </div>
  );
};

export default InventoryCard;
