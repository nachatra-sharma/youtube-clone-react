import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeSearch, toggleMenu, toggleSearch } from "../utils/appSlice";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const isOpen = useSelector((store) => store.app.isSearchOpen);
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);

  useEffect(() => {
    dispatch(closeSearch());
    return () => {
      dispatch(closeSearch());
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => getSearchSuggestions(), 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);
  async function getSearchSuggestions() {
    const response = await fetch(
      "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=" +
        searchQuery
    );
    const data = await response.json();
    setSearchSuggestions(data[1]);
  }
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="flex items-center w-[100%] px-5 py-1 bg-white fixed justify-between z-30">
      <div className="flex items-center gap-6">
        <div className="lg:block hidden">
          <i
            className="fa-solid fa-bars hidden lg:block text-xl cursor-pointer"
            onClick={() => toggleMenuHandler()}
          ></i>
        </div>
        <img
          className="w-[100px] lg:w-32 cursor-pointer"
          src="https://t3.ftcdn.net/jpg/03/00/38/90/360_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg"
          alt="youtube-logo"
        />
      </div>
      <div className="w-[50%] lg:flex items-center hidden">
        <div className="w-[90%]">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search"
            onKeyDown={(e) => {
              if (e.key === "Enter") navigate(`/search-result/${searchQuery}`);
            }}
            onBlur={() => setTimeout(() => dispatch(toggleSearch()), 150)}
            onClick={() => dispatch(toggleSearch())}
            className="border-[1px] w-[85%] border-gray-400 rounded-l-full outline-none px-4 py-1"
          />
          <button
            className="border-[1px] border-gray-400 rounded-r-full py-1 px-6 bg-gray-200"
            onClick={() => navigate(`/search-result/${searchQuery}`)}
          >
            <i className="fa fa-search"></i>
          </button>
        </div>
        {isOpen && searchSuggestions.length !== 0 && (
          <div className="shadow-lg fixed bg-white w-[40%] top-16 rounded-xl">
            <ul className="p-5 flex flex-col gap-3 ">
              {searchSuggestions.map((suggestion, index) => (
                <div
                  onClick={() => {
                    setSearchQuery(suggestion);
                    navigate(`/search-result/${suggestion}`);
                  }}
                  key={index}
                >
                  <div className="flex flex-row gap-3 items-center">
                    <i className="fa fa-search"></i>
                    <li>{suggestion}</li>
                  </div>
                </div>
              ))}
            </ul>
          </div>
        )}
        <div className="w-[10%] cursor-pointer">
          <i className="fa-solid fa-microphone rounded-full px-[13px] py-[10px] bg-gray-200"></i>
        </div>
      </div>
      <div className="lg:flex gap-8 items-center hidden">
        <i className="cursor-pointer fa fa-video-camera"></i>
        <i className="cursor-pointer fa-solid fa-bell"></i>
        <i className="cursor-pointer fa-solid fa-user"></i>
      </div>
    </div>
  );
};

export default Header;
