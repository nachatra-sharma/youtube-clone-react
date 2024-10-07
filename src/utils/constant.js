export const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;

export const YOUTUBE_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=45&chart=mostPopular&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const CHANNEL_LOGO =
  `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=UC_x5XG1OV2P6uZZ5FSM9Ttw&key=` +
  GOOGLE_API_KEY;

export const SINGLE_YOUTUBE_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc&key=" +
  GOOGLE_API_KEY;

export const COMMENT_API = `https://www.googleapis.com/youtube/v3/commentThreads?key=${GOOGLE_API_KEY}&textFormat=plainText&part=snippet&videoId=kffacxfA7G4&maxResults=50`;
