"use client";

import { useCallback } from "react";

export const Item = ({ name, iconSrc, isHovered }) => {
  const onClick = useCallback(() => {
    console.log("clicked on ", name);
  }, [name]);

  return (
    <div
      className={`w-full h-13/100 cursor-pointer rounded-full flex items-center hover:bg-slate-600`}
      onClick={onClick}
    >
      <img src={iconSrc} alt={name} className="ml-8" draggable={false}/>
      <div
        className={`font-semibold	columns-1	text-white ml-12 ease-in-out uppercase min-w-150
					${isHovered ? "opacity-100 visible" : "opacity-0 invisible"}`}
      >
        {name}
      </div>
    </div>
  );
};
