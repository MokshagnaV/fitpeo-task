import SettingsIcon from "../../../assets/icons/SettingsIcon";

function SideHead({ isOpen, setIsOpen }) {
  return (
    <>
      <h1 className="flex gap-2 text-3xl justify-center font-bold">
        <SettingsIcon className="w-9 h-9" />{" "}
        <span className={`${isOpen ? "" : "hidden"} transition-all`}>
          Dashboard
        </span>
      </h1>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={`p-2 bg-slate-200 rounded-full absolute top-9 
        -right-[22px] border-dashed border border-black  
        ${
          isOpen ? "max-md:right-8" : "max-md:-right-24 max-md:top-7"
        } transition-all duration-500`}
      >
        {/* Open icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className={`w-6 h-6 text-black ${
            isOpen ? "opacity-100" : "opacity-0"
          } transition-all`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
        {/* Close icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className={`absolute top-2 w-6 h-6 text-black ${
            isOpen ? "opacity-0" : "opacity-100"
          } transition-all`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
    </>
  );
}

export default SideHead;
