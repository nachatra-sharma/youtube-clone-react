import { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const VideoContainer = () => {
  const [video, setVideo] = useState([]);

  useEffect(() => {
    fetchVideo();
  }, []);

  const fetchVideo = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    setVideo(json?.items);
  };
  const shimmerLength = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 12];
  return (
    <div className="flex justify-between flex-wrap py-4 pt-12 lg:pt-[7rem]">
      {video.length === 0
        ? shimmerLength.map((index) => <Shimmer key={index} />)
        : video?.map((items) => (
            <Link
              className="w-[99%] lg:w-[23%]"
              key={items.id}
              to={"/watch?v=" + items.id}
            >
              <VideoCard videoInfo={items} />
            </Link>
          ))}
    </div>
  );
};

export default VideoContainer;
