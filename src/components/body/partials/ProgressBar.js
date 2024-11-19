import React from "react";
function ProgressBar({ value }) {
  const percentage = window.innerWidth > 800 ? +value / 5 : +value / 6;

  return (
    <div className="h-2 border rounded-3xl w-[95%] m-auto progress">
      <div
        style={{
          width: `${percentage * 100 > 100 ? 100 : percentage * 100}%`,
          backgroundColor: "#000",
          transition: "width 0.2s linear",
          height: "100%",
        }}
        className="border rounded-3xl"
      >
        .
      </div>
    </div>
  );
}

export default ProgressBar;
