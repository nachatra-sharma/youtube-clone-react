import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";
const Body = () => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen);
  return (
    <>
      <div className="flex">
        <Sidebar />
        {
          isMenuOpen ? <div className="flex flex-col pt-4  pr-4 pl-4 lg:pr-2 w-[99%] lg:w-[86%] absolute right-0"> <Outlet /> </div> :
          <div className="flex flex-col pt-16 pr-2 w-[99%] absolute right-0"> <Outlet /> </div>
        }
      </div>
    </>
  );
};

export default Body;
