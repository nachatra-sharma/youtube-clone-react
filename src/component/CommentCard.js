const CommentCard = ({ commentData }) => {
  const { authorProfileImageUrl, authorDisplayName, textOriginal } =
    commentData?.snippet?.topLevelComment?.snippet;
  console.log(commentData);
  function truncateString(str) {
    if (str.length > 80) {
      return str.slice(0, 80) + "...";
    }
    return str;
  }

  return (
    <>
      <div className="flex flex-row gap-5 items-center my-7">
        <div>
          <img src={authorProfileImageUrl} className="rounded-full" alt="" />
        </div>
        <div>
          <div className="flex gap-3">
            <div className="text-gray-800 text-sm font-medium">
              {authorDisplayName}
            </div>
          </div>
          <div className="text-gray-800 text-base font-medium">
            {truncateString(textOriginal)}
          </div>
        </div>
      </div>
    </>
  );
};

export default CommentCard;
