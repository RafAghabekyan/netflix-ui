import { useCallback } from "react";

export const ActionsPanel = ({ name, isHovered }) => {
  const onClick = useCallback(() => {
    console.log("clicked on ", name);
  }, [name]);

  return (
    <div
      className={`cursor-pointer font-bold text-neutral-500	 uppercase ${
        isHovered ? "visible" : "invisible"
      }`}
      onClick={onClick}
    >
      {name}
    </div>
  );
};
