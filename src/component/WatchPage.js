import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu, toggleMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import { SINGLE_YOUTUBE_VIDEO_API } from "../utils/constant";
import VideoPlayer from "./VideoPlayer";
import Comment from "./Comment";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [video, setVideo] = useState([]);
  useEffect(() => {
    fetchData();
    dispatch(closeMenu());
    return () => {
      dispatch(toggleMenu());
    };
  }, []);
  const [searchParams] = useSearchParams();
  const fetchData = async () => {
    const data = await fetch(
      SINGLE_YOUTUBE_VIDEO_API.replace("Ks-_Mh1QhMc", searchParams.get("v"))
    );
    const json = await data.json();
    console.log(json.items[0]);
    setVideo(json.items[0]);
  };

  console.log(searchParams);
  return (
    <div className="flex flex-col">
      <VideoPlayer data={video} id={searchParams.get("v")} />
      <Comment channelID={searchParams.get("v")}></Comment>
    </div>
  );
};

export default WatchPage;
