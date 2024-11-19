import React, { useState } from "react";

import { ChevronDown, ChevronUp } from "lucide-react";
let state = false;
function MobileCategory({ dataState }) {
  const [show, setShow] = useState(false);

  const handleClick = (e) => {
    dataState(!state);
    state = !state;
    setShow(!show);
  };

  return (
    <div
      className={`relative text-center flex items-center justify-center px-2.5 py-[10px] pr-[6px] cursor-pointer category border w-fit m-auto border-transparent ${
        show ? "active" : ""
      } `}
      onClick={handleClick}
    >
      Category
      {show ? (
        <span className="inline-block ">
          <ChevronUp />
        </span>
      ) : (
        <span className="inline-block ">
          <ChevronDown size={20} strokeWidth={2.5} />
        </span>
      )}
    </div>
  );
}
export default MobileCategory;
