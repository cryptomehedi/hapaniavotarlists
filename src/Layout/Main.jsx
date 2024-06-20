import { Outlet } from "react-router-dom";
import ScrollToTop from "../Pages/Shared/ScrollToTop";
import Navbar from "../Pages/Shared/Navbar";
const Main = () => {
  return (
    <div>
      <Navbar />
      <ScrollToTop />
      <div className="px-5">
        <Outlet />
      </div>
    </div>
  );
};
export default Main;
