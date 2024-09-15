const Shimmer = () => {
  return (
    <div className="mb-5">
      <div className="w-[330px] h-[200px] rounded-lg lg:h-[200px] lg:w-[300px] bg-gray-200 relative overflow-hidden">
        <div className="absolute top-0 left-0 h-full w-full bg-gray-200 animate-shimmer"></div>
      </div>
    </div>
  );
};

export default Shimmer;
