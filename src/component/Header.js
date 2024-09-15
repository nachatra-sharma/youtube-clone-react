import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { closeSearch, toggleMenu, toggleSearch } from "../utils/appSlice";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const location = useLocation();
  const searchInputRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (location.pathname === "/") {
      setSearchQuery("");
    }
    if (searchInputRef.current) {
      searchInputRef.current.blur();
    }
  }, [location.pathname]);

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
    try {
      const response = await fetch(
        "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=" +
          searchQuery
      );
      const data = await response.json();
      setSearchSuggestions(data[1]);
    } catch (error) {
      console.log(error);
    }
  }
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="flex items-center w-[100%] px-2 lg:px-5 py-1 bg-white fixed justify-between z-30">
      <div className="flex items-center gap-6">
        {/* sidebar tab for desktop */}
        <div className="lg:block hidden">
          <i
            className="fa-solid fa-bars hidden lg:block text-xl cursor-pointer"
            onClick={() => toggleMenuHandler()}
          ></i>
        </div>
        {/* logo for both */}
        <img
          className="w-[120px] lg:w-32 cursor-pointer"
          src="https://t3.ftcdn.net/jpg/03/00/38/90/360_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg"
          alt="youtube-logo"
        />
      </div>
      {/* search for desktop */}
      <div className="w-[50%] lg:flex items-center hidden">
        <div className="w-[90%]">
          <input
            type="text"
            ref={searchInputRef}
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
        {location.pathname === "/" && searchSuggestions.length !== 0 && (
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
      {/* side font awesome for desktop */}
      <div className="lg:flex gap-8 items-center hidden">
        <i className="cursor-pointer fa fa-video-camera"></i>
        <i className="cursor-pointer fa-solid fa-bell"></i>
        <i className="cursor-pointer fa-solid fa-user"></i>
      </div>
      {/* mobile view search */}
      <div className="block w-[100%] lg:hidden z-50">
        <div className="flex  w-full justify-end">
          <input
            type="text"
            ref={searchInputRef}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                navigate(`/search-result/${searchQuery}`);
              }
            }}
            onClick={() => dispatch(toggleSearch())}
            className="border-[1px] w-[70%] border-gray-400 rounded-l-md outline-none text-sm px-3 py-1"
          />
          <button
            className="border-[1px] border-gray-400 text-sm py-1 px-3 rounded-r-md bg-gray-200"
            onClick={() => navigate(`/search-result/${searchQuery}`)}
          >
            <i className="fa fa-search"></i>
          </button>
        </div>
        {location.pathname === "/" && searchSuggestions?.length !== 0 && (
          <div className="shadow-lg fixed bg-white w-[100%] left-0 top-12 rounded-xl">
            <ul className="p-5 flex flex-col gap-3 ">
              {searchSuggestions?.map((suggestion, index) => (
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
      </div>
    </div>
  );
};

export default Header;
