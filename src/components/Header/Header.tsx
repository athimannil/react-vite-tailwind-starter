const Header = () => {
  return (
    <header className="header border-b border-gray-200 dark:border-transparent">
      <div className="container mx-auto flex items-center justify-between px-4 pt-4 pb-3">
        <div className="flex flex-col">
          <h1 className="m-0 text-2xl leading-none font-bold tracking-wide">
            React Starter Kit
          </h1>
          <p className="mt-1 text-sm">
            A minimal React + Vite + Tailwind CSS boilerplate for fast project
            setup.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
