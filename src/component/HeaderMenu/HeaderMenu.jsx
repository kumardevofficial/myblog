import "../../App.css";
import { Link } from "react-router-dom";

const HeaderMenu = () => {
  return (
    <div className="w-[98%] m-auto mt-[0.5rem] rounded-xl pt-[0.5rem] pb-[0.5rem] shadow-md shadow-bkack">
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
  );
};

export default HeaderMenu;
