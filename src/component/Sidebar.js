import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen);
  if(!isMenuOpen) return null;
  return (
    <div className="hidden p-4 w-[14%] lg:flex flex-col gap-4 select-none pt-[4.5rem] fixed hover:overflow-y-scroll h-full">
      <div className="flex gap-4 items-center bg-gray-100 py-2 px-4 rounded-md hover:bg-gray-200">
        <i className="fa fa-home"></i>
        <p className="text-sm font-500">
          Home
          </p>
      </div>
      <div className="flex gap-4 items-center hover:bg-gray-100 py-2 px-4 rounded-md">
        <i className="fa-solid fa-music"></i>
        <p className="text-sm font-500">Music</p>
      </div>
      <div className="flex gap-4 items-center hover:bg-gray-100 py-2 px-4 rounded-md">
        <i className="fa-brands fa-facebook"></i>
        <p className="text-sm font-500">Facebook</p>
      </div>
      <div className="flex gap-4 items-center hover:bg-gray-100 py-2 px-4 rounded-md">
        <i className="fa-brands fa-tiktok"></i>
        <p className="text-sm font-500">Music</p>
      </div>
      <div className="flex gap-4 items-center hover:bg-gray-100 py-2 px-4 rounded-md">
        <i className="fa-brands fa-instagram"></i>
        <p className="text-sm font-500">Music</p>
      </div>
      <hr className="bg-gray-300" />
      <div className="flex gap-4 items-center bg-gray-100 py-2 px-4 rounded-md hover:bg-gray-200">
        <i className="fa fa-user"></i>
        <p className="text-sm font-500">Your Channel</p>
      </div>
      <div className="flex gap-4 items-center hover:bg-gray-100 py-2 px-4 rounded-md">
        <i className="fa-solid fa-bell"></i>
        <p className="text-sm font-500">Subscribe</p>
      </div>
      <div className="flex gap-4 items-center hover:bg-gray-100 py-2 px-4 rounded-md">
        <i className="fa-solid fa-video"></i>
        <p className="text-sm font-500">Your Videos</p>
      </div>
      <div className="flex gap-4 items-center hover:bg-gray-100 py-2 px-4 rounded-md">
        <i className="fa-regular fa-clock"></i>
        <p className="text-sm font-500">Watch Later</p>
      </div>
      <div className="flex gap-4 items-center hover:bg-gray-100 py-2 px-4 rounded-md">
        <i className="fa-solid fa-angle-down"></i>
        <p className="text-sm font-500">Show More</p>
      </div>
      <hr className="bg-gray-300" />
      <h3 className="font-600">Explore</h3>
      <div className="flex gap-4 items-center hover:bg-gray-100 py-2 px-4 rounded-md">
        <i className="fa-solid fa-fire"></i>
        <p className="text-sm font-500">Trending</p>
      </div>
      <div className="flex gap-4 items-center hover:bg-gray-100 py-2 px-4 rounded-md">
        <i className="fa-solid fa-bag-shopping"></i>
        <p className="text-sm font-500">Shopping</p>
      </div>
      <div className="flex gap-4 items-center hover:bg-gray-100 py-2 px-4 rounded-md">
        <i className="fa-solid fa-film"></i>
        <p className="text-sm font-500">Movies</p>
      </div>
      <div className="flex gap-4 items-center hover:bg-gray-100 py-2 px-4 rounded-md">
        <i className="fa-solid fa-thumbs-up"></i>
        <p className="text-sm font-500">Liked Video</p>
      </div>
      <hr className="bg-gray-300" />
    </div>
  );
};

export default Sidebar;
