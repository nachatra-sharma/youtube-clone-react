import avatar from "../assets/avatar.png";

const CommentCard = ({ commentData }) => {
  const { authorProfileImageUrl, authorDisplayName, textOriginal } =
    commentData?.snippet?.topLevelComment?.snippet;
  function truncateString(str) {
    if (str.length > 80) {
      return str.slice(0, 80) + "...";
    }
    return str;
  }

  function truncateString2(str) {
    if (str.length > 20) {
      return str.slice(0, 20) + "...";
    }
    return str;
  }

  return (
    <>
      <div className="flex flex-row gap-5 items-center my-7">
        <div>
          <img
            src={authorProfileImageUrl ? authorProfileImageUrl : avatar}
            className="rounded-full w-[40px] h-[40px] lg:w-[50px] lg:h-[50px]"
            alt=""
          />
        </div>
        <div>
          <div className="flex gap-3">
            <div className="text-gray-800 text-sm font-medium">
              {authorDisplayName}
            </div>
          </div>
          <div className="text-gray-800 text-sm lg:text-base font-normal lg:font-medium">
            {window.innerWidth > 800
              ? truncateString(textOriginal)
              : truncateString2(textOriginal)}
          </div>
        </div>
      </div>
    </>
  );
};

export default CommentCard;
