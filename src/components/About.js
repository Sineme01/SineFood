import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import pizza_img from "../assets/img/pizza.jpg";
import { FastField } from "formik";
import Profile from "./Profile_class";
const About = () => {
  const [isProfile, setIsProfile] = useState(false);
  // useEffect(() => {
  //   setIsProfile(true);
  // }, [isProfile===false])
  return (
    <>
      <div className="">

        {isProfile === false ? (
          <button className="ml-[675] my-5 bg-purple-500 rounded-md p-[8] hover:bg-green-500 text-white font-bold text-sm" onClick={() => { setIsProfile(true) }}>
            See My Profile
          </button>
        ) : (<><button className="ml-[675] my-5 bg-purple-500 rounded-md p-[8] hover:bg-green-500 text-white font-bold text-sm" onClick={() => { setIsProfile(false) }}>
          Hide My Profile
        </button><Profile /></>)}
        {/* conditional rendering an exapmple of config driven ui */}
        {/* {isProfile && ()} */}
        <div className="flex flex-wrap">
          <div className="ml-28 mt-24 mb-32">
            <h1 className="text-6xl text-black font-extrabold">Welcome to</h1>
            <h1 className="text-6xl text-black font-extrabold mt-1">
              The world of
            </h1>
            <h1 className="text-6xl text-white font-extrabold bg-purple-500 mt-1  p-5 rounded-3xl">
              Tasty & Fresh Food
            </h1>
            <h1 className="italic text-3xl text-black font-bold">
              "Made with Love, Served with Care."
            </h1>
          </div>
          <img src={pizza_img} className="ml-36 mt-4 w-[500] h-[500]"></img>
        </div>
      </div>
    </>
  );
};
export default About;
