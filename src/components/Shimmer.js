const Shimmer = () => {
  return (
    <>
      {/* Shimmer for our Search Bar */}
      <div className="p-5 bg-gray-200 my-10 mx-96">
        <div className="Shimmer-search-input"></div>
      </div>
      {/* Shimmer for our Restaurant Cards */}
      <div className=" mx-20 flex flex-wrap">
        {Array(15)
          .fill("")
          .map(() => (
            <div className="bg-gray-200 w-72 h-60  mx-5 my-5"></div>
          ))}
      </div>
    </>
  );
};

export default Shimmer;
