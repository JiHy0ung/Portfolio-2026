const Header = () => {
  return (
    <div className="w-full flex justify-between items-center px-[1.5rem] py-[0.75rem] fixed backdrop-blur-xs">
      <h1 className="font-syne text-1xl font-black cursor-pointer">
        JH<span className="text-red-600">.</span>
      </h1>

      {/* <div className="font-syne">
        <button className="cursor-pointer">menu</button>
      </div> */}
    </div>
  );
};

export default Header;
