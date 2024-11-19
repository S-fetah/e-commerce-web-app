import React from "react";

function List({ props }) {
  const { title, items } = props;
  return (
    <div className={`footerlist ${title}`}>
      <h1 className="mb-5 text-[18px]">
        <b>{title}</b>
      </h1>
      <ul>
        {items.map((ele, index) => {
          return (
            <li
              key={index + 1}
              className="p-0.5 transition-all duration-200 ease-in-out hover:text-footerh hover:translate-x-[10px] cursor-default text-[14px]"
            >
              {ele}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default List;
