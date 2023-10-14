function MenuItem({ icon, title, submenu, path }) {
  return (
    <div
      className={`group flex justify-between items-center p-2 px-3 my-2 ${
        location.pathname === path
          ? "bg-white bg-opacity-20 rounded-xl opacity-100"
          : " opacity-60 "
      }`}
    >
      <div className="flex gap-4 items-center">
        {icon} <h2 className="text-lg font-bold">{title}</h2>
      </div>
      {submenu && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="3"
          stroke="currentColor"
          className="w-5 h-5 -translate-x-2 group-hover:translate-x-0 transition-all"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      )}
    </div>
  );
}

export default MenuItem;
