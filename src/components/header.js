import { useState } from "react";
import { Link } from "react-router-dom";
import Food_Fire_Logo from "../assets/img/Food_Fire_Logo.png";
import Basic from "./Authentication";
// import EmojiPicker from "emoji-picker-react";
const Title = () => {
  return (
    <>
      <a href={"/"}><img className="h-20 pl-2" src={Food_Fire_Logo} alt="logo"></img></a>
    </>
  );
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="flex justify-between bg-white-100 shadow-lg">
      <Title></Title>
      <div className="nav-items">
        <ul className="flex py-5">
          <li className="px-2 font-bold hover:bg-purple-500 rounded-md py-2">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="px-2 font-bold hover:bg-purple-500 rounded-md py-2">
            <Link to={"/about"}>About</Link>{" "}
          </li>
          <li className="px-2 font-bold hover:bg-purple-500 rounded-md py-2">
            <Link to={"/contact"}>Contact</Link>{" "}
          </li>
          <li className="px-2 font-bold hover:bg-purple-500 rounded-md py-2">🛒</li>
          {/* conditional Rendering */}
          {isLoggedIn ? (
            <li className="px-2 font-bold hover:bg-purple-500 rounded-md py-2">
              <button
                onClick={() => {
                  setIsLoggedIn(false);
                }}
              >
                Logout
              </button>
            </li>
          ) : (
            <li className="px-2 font-bold hover:bg-purple-500 rounded-md py-2">
              {/* <Link to="/login"> */}
              <button
                onClick={() => {
                  setIsLoggedIn(true);
                }}
              >
                Login
              </button>
              {/* </Link> */}
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};
export default Header;
