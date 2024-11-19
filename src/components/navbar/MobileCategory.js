import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

function MobileCategory({ dataState, categoryRef }) {
  const [show, setShow] = useState(false);

  const handleClick = (e) => {
    if (window.innerWidth <= 479) {
      // If the screen is small, toggle show and pass state to parent (dataState)
      const newState = !show;
      dataState({ state: newState, pos: "SIUUUUUUUUU" });
      setShow(newState); // Update React state for re-render
    } else {
      // For larger screens, just toggle show
      const newState = !show;
      dataState(newState); // Pass new state to parent
      setShow(newState); // Update React state for re-render
    }
  };

  return (
    <div
      className={`relative text-center flex items-center justify-center px-2.5 py-[10px] pr-[6px] cursor-pointer category border w-fit m-auto border-transparent ${
        show ? "active" : ""
      }`}
      onClick={handleClick}
      ref={categoryRef}
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
