import React from "react";

function Service({ props }) {
  const { title, body, img } = props;
  return (
    <div className="text-left w-[30%]  overflow-hidden bg-itemsBG border rounded-xl service">
      <div className="h-[50%] p-10 first">
        <h2 className="text-[22px]  font-semibold max-w-[230px] mb-[24px]">
          {title}
        </h2>
        <p className="text-[16px]">{body}</p>
      </div>
      <div className="h-[50%] overflow-hidden">
        <img src={img} alt={title} className="w-full h-full  object-cover " />
      </div>
    </div>
  );
}

export default Service;
