import MenuItem from "./common/MenuItem";
import SettingsIcon from "../assets/icons/SettingsIcon";
import ProductIcon from "../assets/icons/ProductIcon";
import DashboardIcon from "../assets/icons/DashboardIcon";
import CustomerIcon from "../assets/icons/CustomerIcon";
import IncomeIcon from "../assets/icons/IncomeIcon";
import PromoteIcon from "../assets/icons/PromoteIcon";
import HelpIcon from "../assets/icons/HelpIcon";
import { useState } from "react";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <aside
      className={`relative px-7 py-10 min-h-screen
    flex flex-col h-full bg-blue-950 text-white ${
      isOpen ? " w-[20%] min-w-fit" : ""
    } transition-all`}
    >
      <div
        className={`flex-grow ${
          isOpen ? "w-full" : "w-12"
        } overflow-hidden transition-all`}
      >
        <h1 className="flex gap-2 text-3xl font-bold">
          <SettingsIcon className="w-9 h-9 flex-grow" />{" "}
          <span className={`${isOpen ? "" : "hidden"} transition-all`}>
            Dashboard
          </span>
        </h1>
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="p-2 bg-slate-200 rounded-full absolute top-9 -right-[22px] border-dashed border border-black"
        >
          {/* Open icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className={`w-6 h-6 text-black ${
              isOpen ? "opacity-0" : "opacity-100"
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
              isOpen ? "opacity-100" : "opacity-0"
            } transition-all`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>

        <ul className="my-10">
          <li>
            <a href="/">
              <MenuItem icon={<DashboardIcon />} title="Dashboard" path="/" />
            </a>
          </li>
          <li>
            <a href="/product">
              <MenuItem
                icon={<ProductIcon />}
                title="Product"
                path="/product"
                submenu={true}
              />
            </a>
          </li>
          <li>
            <a href="/customers">
              <MenuItem
                icon={<CustomerIcon />}
                title="Customers"
                path="/customers"
              />
            </a>
          </li>
          <li>
            <a href="/income">
              <MenuItem icon={<IncomeIcon />} title="Income" path="/income" />
            </a>
          </li>
          <li>
            <a href="/promote">
              <MenuItem
                icon={<PromoteIcon />}
                title="Promote"
                path="/promote"
              />
            </a>
          </li>
          <li>
            <a href="/help">
              <MenuItem icon={<HelpIcon />} title="Help" path="/help" />
            </a>
          </li>
        </ul>
      </div>

      <div
        className={`flex items-center gap-2 p-2 bg-white bg-opacity-20 rounded-md cursor-pointer ${
          isOpen ? "w-full" : "w-12"
        } overflow-hidden transition-all`}
      >
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={`${isOpen ? "w-14 h-14" : "w-8 h-8"}`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>
        <div className={`flex-grow ${isOpen ? "" : "hidden"} transition-all`}>
          <p className="font-bold">Evano</p>
          <p className="text-sm text-slate-300">Product Manager</p>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5 text-slate-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
