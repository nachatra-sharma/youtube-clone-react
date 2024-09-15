import React from "react";

const VideoPlayer = (props) => {
  const { id } = props;
  return (
    <div>
      <iframe
        id="player"
        type="text/html"
        className="lg:w-[1046px] lg:h-[600px] w-[381px] h-[200px]"
        src={"http://www.youtube.com/embed/" + id}
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
