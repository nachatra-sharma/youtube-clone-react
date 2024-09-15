const ShimmerResult = () => {
  return (
    <div className="mb-5">
      <div className="h-[260px] w-[95%] bg-gray-200 relative overflow-hidden">
        <div className="absolute top-0 left-0 h-full w-full bg-gray-200 animate-shimmer"></div>
      </div>
    </div>
  );
};

export default ShimmerResult;
