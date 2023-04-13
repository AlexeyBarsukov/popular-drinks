import { NavLink, Outlet } from "react-router-dom";

const LayoutMenu = () => {
  return (
    <>
      <div className="d-flex justify-content-center">
        <div>Ваши напитки:</div>
      </div>
      <div className="d-flex justify-content-around">
        <NavLink
          to="/"
          end={true}
          className={({ isActive }) =>
            isActive
              ? "text-danger fs-3 text-decoration-none"
              : "text-decoration-none fs-3"
          }
        >
          Посмотреть список напитков
        </NavLink>
        <NavLink
          to="/favorite"
          end={true}
          className={({ isActive }) =>
            isActive
              ? "text-danger fs-3 text-decoration-none"
              : "text-decoration-none fs-3"
          }
        >
          Посмотреть список избранных напитков
        </NavLink>
      </div>
      <Outlet />
    </>
  );
};

export default LayoutMenu;
