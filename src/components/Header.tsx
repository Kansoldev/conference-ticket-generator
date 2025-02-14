const Header = () => {
  return (
    <header className="flex items-center justify-between bg-[#031e23] border border-solid border-[#166a79] md:w-[90%] mx-5 md:mx-auto mt-7 px-4 py-3 rounded-2xl md:rounded-3xl">
      <div className="logo">
        <img src="/logo.png" />
      </div>

      <nav className="hidden md:block">
        <ul className="flex gap-9" role="list">
          <li>
            <a href="#" className="text-white no-underline text-lg">
              Events
            </a>
          </li>

          <li>
            <a href="#" className="text-white no-underline text-lg">
              My Tickets
            </a>
          </li>

          <li>
            <a href="#" className="text-white no-underline text-lg">
              About Project
            </a>
          </li>
        </ul>
      </nav>

      <button className="bg-white uppercase rounded-xl p-3 min-[400px]:px-6">
        My Tickets &nbsp; &#10230;
      </button>
    </header>
  );
};

export default Header;
