import { useEffect, useState } from "react";
import { COMMENT_API } from "../utils/constant";
import CommentCard from "./CommentCard";
const Comment = ({ channelID }) => {
  const [commentList, setCommentList] = useState([]);

  async function fetchVideoComment() {
    const url = COMMENT_API.replace("kffacxfA7G4", channelID);
    const response = await fetch(url);
    const data = await response.json();
    setCommentList(data?.items);
  }

  useEffect(() => {
    fetchVideoComment();
  }, []);

  return (
    <div className="w-[70%]">
      <h1 className="text-black text-2xl font-medium mt-7 lg:mt-20">
        Comments:
      </h1>
      {commentList?.map((comment) => {
        return <CommentCard commentData={comment}></CommentCard>;
      })}
    </div>
  );
};

export default Comment;
