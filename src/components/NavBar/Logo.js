"use client";

import { useCallback } from "react";

export const Logo = ({ name, logoSrc, isHovered }) => {
  const onClick = useCallback(() => {
    console.log("clicked on ", name);
  }, [name]);

  return (
    <div
      className={`w-full h-full cursor-pointer rounded-full flex items-center hover:bg-slate-600 ${
        isHovered ? "visible" : "invisible"
      }`}
      onClick={onClick}
    >
      <img src={logoSrc} alt={name} className="ml-5 w-14 h-14" draggable={false}/>
      <div
        className={`font-bold columns-1 text-white ml-7 ease-in-out uppercase min-w-150 ${
          isHovered ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {name}
      </div>
    </div>
  );
};
