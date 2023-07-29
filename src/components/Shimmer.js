const Shimmer = () => {
  return (
    <>
      {/* Shimmer for our Search Bar */}
      <div className="search-Container">
        <div className="Shimmer-search-input"></div>
      </div>
      {/* Shimmer for our Restaurant Cards */}
      <div className="restaurant-list">
        {Array(15)
          .fill("")
          .map((e) => (
            <div className="Shimmer-Card"></div>
          ))}
      </div>
    </>
  );
};

export default Shimmer;
