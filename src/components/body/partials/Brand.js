import React from "react";

function Brand({ title, url, index }) {
  return (
    <div
      key={index}
      className="flex items-center justify-between p-4 border border-white bg-itemsBG rounded-lg brand"
    >
      <img src={url} alt={title} className="w-[25%]" />
      <div className="flex-1 ml-4">
        <h2 className="text-lg font-medium">{title}</h2>
        <p className="text-sm text-gray-500">Delivery within 24 hours</p>
      </div>
    </div>
  );
}

export default Brand;
