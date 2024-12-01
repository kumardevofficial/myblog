import { useState } from "react";
import "../../App.css";
import { Link } from "react-router-dom";

const HeaderMenu = () => {
  const [menuOption, setMenuOption] = useState(false);

  const handleMenu = () => {
    if (menuOption == false) {
      setMenuOption(true);
    } else {
      setMenuOption(false);
    }
  };
  return (
    <>
      <div className=" hidden md:block w-[98%] m-auto mt-[0.5rem] rounded-xl pt-[0.5rem] pb-[0.5rem] shadow-md shadow-bkack ">
        <ul className="flex justify-between items-centerbox-border px-8  text-xl rounded-xl w-full h-full">
          <li className="text-shadow-me">
            <Link to="/">Home</Link>
          </li>
          <li className="text-shadow-me">Politics</li>
          <li className="text-shadow-me">Technology</li>
          <li className="text-shadow-me">General</li>
          <li className="text-shadow-me">
            <Link to="/create-post">Create Post</Link>
          </li>
          <li className="text-shadow-me">Login/signup</li>
        </ul>
      </div>
      <div className="w-full  bg-blue-400 md:hidden  ">
        <div className="w-full flex justify-between items-center box-border px-4 h-[3rem] ">
          <div className="text-white font-bold">MY BLOG</div>
          <div
            className="text-white font-bold cursor-pointer"
            onClick={handleMenu}
          >
            HA
          </div>
        </div>
        <ul
          className={`${
            menuOption ? "flex" : "hidden"
          } flex-col justify-between items-centerbox-border px-8  text-xl rounded-xl w-full gap-y-2 pt-2 pb-2 box-border`}
        >
          <li
            className="text-shadow-me text-white font-bold "
            onClick={handleMenu}
          >
            <Link to="/">Home</Link>
          </li>
          <li
            className="text-shadow-me text-white font-bold"
            onClick={handleMenu}
          >
            Politics
          </li>
          <li
            className="text-shadow-me text-white font-bold"
            onClick={handleMenu}
          >
            Technology
          </li>
          <li
            className="text-shadow-me text-white font-bold"
            onClick={handleMenu}
          >
            General
          </li>
          <li
            className="text-shadow-me text-white font-bold"
            onClick={handleMenu}
          >
            <Link to="/create-post">Create Post</Link>
          </li>
          <li
            className="text-shadow-me text-white font-bold"
            onClick={handleMenu}
          >
            Login/signup
          </li>
        </ul>
      </div>
    </>
  );
};

export default HeaderMenu;
