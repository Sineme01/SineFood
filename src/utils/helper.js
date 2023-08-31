import { swiggyData } from "../components/swiggy";
export function filterData(searchText, restaurants) {
  const filterdata = restaurants?.filter((restaurant) =>
    restaurant?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterdata;
}
//async
export function getRestaurants() {
  //If I am working at night Swiggy API has not any restaurants so I am using this dummy data.
  return (swiggyData?.data?.cards[2]?.card?.card?.gridElements.infoWithStyle.restaurants);
}