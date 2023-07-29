import { useState, useEffect } from "react";
//Hook Code starts from here.
const useRestaurant = (restaurantId) => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);
  const [restaurantMenu, setRestaurantMenu] = useState(null);
  const [resMenu, setResMenu] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);
  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.8560271&lng=85.7868233&restaurantId=" +
        restaurantId?.id
    );
    const json = await data.json();
    // console.log(json);
    setRestaurantInfo(json.data?.cards[0]?.card?.card?.info);
    setRestaurantMenu(
      json.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    );
  }
  if (restaurantMenu !== null && resMenu === null) {
    const abc = Array();
    for (let index = 1; index < restaurantMenu.length - 2; index++) {
      abc.push(restaurantMenu[index]?.card?.card?.itemCards);
    }
    // console.log(restaurantMenu);
    const cde = Array();
    const mySet = new Set();
    for (let index = 0; index < abc?.length; index++) {
      if (abc[index] !== undefined) {
        for (let j = 0; j < abc[index]?.length; j++) {
          if (mySet.has(abc[index][j]?.card?.info?.id) === false) {
            cde.push(Object(abc[index][j]?.card?.info));
            mySet.add(abc[index][j]?.card?.info?.id);
          }
        }
      }
    }
    // console.log(abc);
    // console.log(cde);
    if (resMenu == null) setResMenu(cde);
  }
  return [restaurantInfo, resMenu];
};

export default useRestaurant;
