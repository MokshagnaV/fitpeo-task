import { useState } from "react";
import Menu from "./Menu";
import SideHead from "./SideHead";
import ProfileCard from "./ProfileCard";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <aside
      className={`max-md:-translate-x-32 max-md:fixed relative px-7 py-10 min-h-screen
    flex flex-col h-full bg-blue-950 text-white z-10 ${
      isOpen ? " w-[20%] max-md:w-full min-w-fit max-md:translate-x-0" : ""
    } transition-all duration-500`}
    >
      <div
        className={` flex-grow ${
          isOpen ? "w-full" : "w-12"
        } overflow-hidden transition-all`}
      >
        <SideHead isOpen={isOpen} setIsOpen={setIsOpen} />
        <Menu />
      </div>
      <ProfileCard isOpen={isOpen} />
    </aside>
  );
}

export default Sidebar;
