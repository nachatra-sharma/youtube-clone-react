import React from "react";

const VideoPlayer = ({ id, data }) => {
  return (
    <div className="flex flex-col gap-5">
      <iframe
        id="player"
        type="text/html"
        className="lg:w-[1046px] lg:h-[600px] w-full h-[250px]"
        src={"https://www.youtube.com/embed/" + id}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <h1 className="text-lg font-bold text-gray-700">
        {data?.snippet?.title}
      </h1>
    </div>
  );
};

export default VideoPlayer;
