import { useState } from "react";
import { Link } from "react-router-dom";
import SineFoodLogo from "../assets/img/SineFood.png";
import { useNavigate } from "react-router-dom";
import Modal from "./modal";
// import EmojiPicker from "emoji-picker-react";
const Title = () => {
  return (
    <>
      <a href={"/"}><img className="h-20 mx-10" src={SineFoodLogo} alt="logo"></img></a>
    </>
  );
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="flex justify-between bg-white-100 shadow-lg">
      <Title></Title>
      <div className="nav-items">
        <ul className="flex py-5 px-10">
          <li className="px-5 font-bold hover:bg-purple-500 rounded-md py-3">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="px-5 font-bold hover:bg-purple-500 rounded-md py-3">
            <Link to={"/about"}>About</Link>{" "}
          </li>
          <li className="px-5 font-bold hover:bg-purple-500 rounded-md py-3">
            <Link to={"/contact"}>Contact</Link>{" "}
          </li>
          {/* <li className="px-3 font-bold hover:bg-purple-500 rounded-md py-2">🛒</li> */}
          <li className="px-5 font-bold hover:bg-purple-500 rounded-md"><Modal /></li>
          {/* conditional Rendering */}
          {isLoggedIn ? (
            <li className="px-5 font-bold hover:bg-purple-500 rounded-md py-3">
              <button
                onClick={() => {
                  setIsLoggedIn(false);
                }}
              >
                Login
              </button>
            </li>
          ) : (
            <li className="px-5 font-bold hover:bg-purple-500 rounded-md py-3">
              <button onClick={() => { navigate("/login") }}>
                Login
              </button>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};
export default Header;
