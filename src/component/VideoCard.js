import { useState, useEffect } from "react";
import { CHANNEL_LOGO } from "../utils/constant";

const VideoCard = (props) => {
  const { url } = props.videoInfo.snippet.thumbnails.medium;
  const { viewCount } = props.videoInfo.statistics;
  const { channelTitle, title, channelId } = props.videoInfo.snippet;
  const NEW_CHANNEL_LOGO = CHANNEL_LOGO.replace("UC_x5XG1OV2P6uZZ5FSM9Ttw", channelId);


  const [logo, setLogo] = useState([]);
  useEffect(()=>{
    fetchLogo();
  },[]);

  const fetchLogo = async () => {
    const data = await fetch(NEW_CHANNEL_LOGO);
    const json = await data.json();
    setLogo(json.items);
  }
  return (
    <div className="w-full pb-8 lg:pb-4">
      <div className="w-full rounded-lg">
        <img className="w-full object-contain rounded-lg" src={url} alt="" />{" "}
      </div>
      <div className="flex pt-3 gap-3">
        <div>
          {
            logo.map((img) => {
              const {url} = img.snippet.thumbnails.medium;
              return <img src={url} key={img.id} className="rounded-full w-8" alt="" />
            })
          }
        </div>
        <div className="flex flex-col gap-1 w-[95%]">
          <p className="text-sm">{title}</p>
          <div className="flex gap-2 items-center">
            <p className="text-xs text-gray-600">{channelTitle}</p>
            <div className="w-[6px] h-[6px] bg-gray-300 rounded-full"></div>
            <p className="text-xs text-gray-600">
              {Math.floor(viewCount / 1000000) > 0
                ? Math.floor(viewCount / 1000000) + "M views"
                : Math.floor(viewCount / 1000) + "K views"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
