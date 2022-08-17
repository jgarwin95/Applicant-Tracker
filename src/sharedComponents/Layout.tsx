import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

const Layout = () => {
  return (
    <div className="layout">
      <Navigation />
      <div className="outlet">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
