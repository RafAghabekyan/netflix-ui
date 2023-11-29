"use client";

import { useState } from "react";
import { Item } from "./Item";
import { ACTION_PANEL_NAMES, NAVBAR_ITEM_NAMES } from "@/constants";
import { Logo } from "./Logo";
import { ActionsPanel } from "./ActionsPanel";

const userName = "Daniel";

export const NavBar = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex flex-col fixed  bg-black z-50 w-36 h-screen px-5 py-5 transition-all duration-300 ease-in-out hover:w-96 hover:shadow-navBar"
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      <div className="h-8/100 mb-16">
        <Logo
          logoSrc="/assets/logo.png"
          name={userName}
          isHovered={isHovered}
        />
      </div>

      <div className="flex flex-col	justify-evenly h-1/2">
        <Item
          iconSrc="/assets/icons/search.png"
          name={NAVBAR_ITEM_NAMES.SEARCH}
          isHovered={isHovered}
        />
        <Item
          iconSrc="/assets/icons/home.png"
          name={NAVBAR_ITEM_NAMES.HOME}
          isHovered={isHovered}
        />
        <Item
          iconSrc="/assets/icons/tvShows.png"
          name={NAVBAR_ITEM_NAMES.TV_SHOWS}
          isHovered={isHovered}
        />
        <Item
          iconSrc="/assets/icons/movies.png"
          name={NAVBAR_ITEM_NAMES.MOVIES}
          isHovered={isHovered}
        />
        <Item
          iconSrc="/assets/icons/genres.png"
          name={NAVBAR_ITEM_NAMES.GENRES}
          isHovered={isHovered}
        />
        <Item
          iconSrc="/assets/icons/watchLater.png"
          name={NAVBAR_ITEM_NAMES.WATCH_LATER}
          isHovered={isHovered}
        />
      </div>

      <div className="flex flex-col justify-evenly mt-auto h-1/6	ml-5">
        <ActionsPanel
          name={ACTION_PANEL_NAMES.LANGUAGE}
          isHovered={isHovered}
        />
        <ActionsPanel
          name={ACTION_PANEL_NAMES.GET_HELP}
          isHovered={isHovered}
        />
        <ActionsPanel name={ACTION_PANEL_NAMES.EXIT} isHovered={isHovered} />
      </div>
    </div>
  );
};
