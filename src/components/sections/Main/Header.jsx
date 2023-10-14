import SearchBar from "../../common/SearchBar";

function Header() {
  return (
    <header className="py-4 flex justify-between gap-5 flex-wrap">
      <h1 className="text-2xl font-bold max-md:ml-10">Hello Evano 👋,</h1>
      <SearchBar className="w-full" />
    </header>
  );
}

export default Header;
