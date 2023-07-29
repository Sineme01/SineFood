//Named Import
// import { Link } from "react-router-dom";
// import image from "../assets/img/burger.jpg";
import { IMG_CND_URL } from "./config";
// import {Link} from "react-router-dom"
const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  avgRating,
  costForTwoString,
  slaString,
  area
}) => {
  const image = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ee5f8e06b300efc07c9fe3f4df40dfc4";
  return (
    <div className="w-64 px-2 pt-4 pb-2 m-5 bg-white-100 hover:border-2 rounded-lg">
      {/* <Link to={"/"}> */}
      <img
        className="rounded"
        // IMG_CND_URL + cloudinaryImageId
        src={image}
        alt="Restaurant"
      ></img>
      {/* </Link> */}
      <h2 className="font-bold text-lg">{name}</h2>
      <h3 className="text-xs">{cuisines.join(", ")}</h3>
      {/* <h3 className="text-xs">{area}</h3> */}
      <div className="flex flex-wrap">
        {avgRating < 3.5 ? (
          <button className="bg-red-500 rounded-md text-white px-1 py-1 m-1 font-bold font-xs">
            ★ {avgRating}
          </button>
        ) : (
          <button className="bg-green-500 rounded-md text-white px-1 py-1 m-1 font-bold font-xs">
            ★ {avgRating}
          </button>
        )}
        <h1 className="text-xs font-bold  pt-4">
          {" "}
          ● {slaString} ● {costForTwoString}
        </h1>
      </div>
    </div>
  );
};
export default RestaurantCard;
