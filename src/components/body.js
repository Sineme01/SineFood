import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { restaurantList, Swiggy_API } from "./config";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
const Body = () => {
  //In React the below variables are known as state variables.
  const [searchText, setsearchText] = useState(""); //It returns the searchText and setsearchText
  //-> IT will got updated once we write something inside our search box.
  //If we want some bidefault value then we should use like that useState("some_value");

  useEffect(() => {
    if (searchText === "") {
      setFilteredRestaurants(getAllRestaurants);
    } else {
      const Data = filterData(searchText, getAllRestaurants);
      setFilteredRestaurants(Data);
    }
  }, [searchText]);

  //State Variables
  const [getAllRestaurants, setGetAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  useEffect(() => {
    //API Call.
    // getRestaurants();
    //If I am working at night Swiggy API has not any restaurants so I am using this dummy data.
    setGetAllRestaurants(restaurantList);
    setFilteredRestaurants(restaurantList);
  }, []);

  async function getRestaurants() {
    const data = await fetch(Swiggy_API);
    const json = await data.json();
    setGetAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }
  //Conditional Rendering
  // If our data is not fetched from API yet then the Shimmer UI will be loaded.
  // If our data is fetched then Restraunts (API) data will be loaded.
  return getAllRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="p-5 bg-white-100 my-2 mx-96 ">
        <input
          type="text"
          className="px-2 w-[600] py-1 italic border-2 focus:border-red-900"
          placeholder="Search for restaurant....."
          value={searchText}
          onChange={(e) => {
            setsearchText(e.target.value);
          }}
        ></input>
        {/* It is two way binding in React.*/}
        {/* <h1>{searchText}</h1> */}
        <button
          className="px-3 py-[5.5] bg-purple-500 hover:bg-green-600 text-white rounded-r-lg"
          onClick={() => {
            if (searchText === "") {
              setFilteredRestaurants(getAllRestaurants);
            } else {
              const Data = filterData(searchText, getAllRestaurants);
              setFilteredRestaurants(Data);
            }
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants?.map((restaurant) => {
          return (
            <Link
              to={"restaurant/" + restaurant?.data?.id}
              key={restaurant?.data?.id}
            >
              <RestaurantCard {...restaurant?.data} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
