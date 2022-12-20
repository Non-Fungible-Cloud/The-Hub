import React from "react";

const AppHeader = () => {
  return (
    <header
      className={`sticky h-[70px] top-0 z-50 w-full flex  items-center justify-between gap-5 bg-black px-4 py-3 md:px-8 lg:px-24 xl:px-48`}
    >
      <a href="/home" className="flex items-center justify-start gap-5">
        <span className="font-bold">
          <img src="/THH_white.png" alt="logo" className="h-8" />
        </span>
      </a>
    </header>
  );
};

export default AppHeader;