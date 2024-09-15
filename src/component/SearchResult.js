import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { GOOGLE_API_KEY } from "../utils/constant";
import { useDispatch } from "react-redux";
import { closeSearch } from "../utils/appSlice";
import ShimmerResult from "./ShimmerResult";

const SearchResult = () => {
  const dispatch = useDispatch();
  const [searchResult, setSearchResult] = useState([]);
  const { searchQuery } = useParams();

  async function getAllSearchResult() {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchQuery}&key=${GOOGLE_API_KEY}`
    );
    const data = await response.json();
    setSearchResult(data?.items);
  }

  useEffect(() => {
    getAllSearchResult();
  }, [searchQuery]);

  useEffect(() => {
    dispatch(closeSearch());
    return () => {
      dispatch(closeSearch());
    };
  });

  function truncateString(str) {
    if (str.length > 80) {
      return str.slice(0, 80) + "...";
    }
    return str;
  }

  function truncateString2(str) {
    if (str.length > 70) {
      return str.slice(0, 70) + "...";
    }
    return str;
  }

  const shimmerLength = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 12];

  return (
    <div className="py-4 pt-12 lg:pt-[7rem]">
      {searchResult.length === 0
        ? shimmerLength.map((index) => <ShimmerResult key={index} />)
        : searchResult?.map((result, index) =>
            index === 0 ? (
              <></>
            ) : (
              <Link
                key={index}
                to={`/watch?v=${index !== 0 && result?.id?.videoId}`}
              >
                <div className="flex flex-col lg:flex-row gap-2 lg:gap-5 w-full mb-5">
                  <div>
                    <img
                      className="rounded-md  max-w-full"
                      src={
                        index !== 0 && result?.snippet?.thumbnails?.high?.url
                      }
                      alt=""
                    />
                  </div>
                  <div>
                    <h2 className="text-gray-800 font-normal text-sm lg:text-lg tracking-normal lg:tracking-wider">
                      {index !== 0 && result?.snippet?.title}
                    </h2>
                    <div className="flex items-center gap-2 lg:gap-3 my-2 lg:my-5">
                      <img
                        src={searchResult[0]?.snippet?.thumbnails?.default?.url}
                        className="w-8 rounded-full"
                      />
                      <span className="text-sm">
                        {searchResult[2]?.snippet?.channelTitle}
                      </span>
                    </div>
                    <p className="text-gray-500 text-xs lg:text-lg leading-6 lg:leading-8">
                      {window.innerWidth > 800
                        ? truncateString(
                            index !== 0 && result?.snippet?.description
                          )
                        : truncateString2(
                            index !== 0 && result?.snippet?.description
                          )}
                    </p>
                  </div>
                </div>
              </Link>
            )
          )}
    </div>
  );
};
export default SearchResult;
