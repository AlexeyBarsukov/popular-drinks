import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <div>Список напитков:</div>
      <div className="d-flex justify-content-around">
        <NavLink
          to="/allCats"
          end={true}
          className={({ isActive }) =>
            isActive ? "text-danger fs-3 text-decoration-none" : " "
          }
        >
          Посмотреть список напитков
        </NavLink>
        <NavLink
          to="/favoriteCats"
          end={true}
          className={({ isActive }) =>
            isActive ? "text-danger fs-3 text-decoration-none" : ""
          }
        >
          Посмотреть список избранных напитков
        </NavLink>
      </div>
    </>
  );
};

export default Menu;
