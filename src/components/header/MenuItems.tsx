import { NavLink } from "react-router-dom";

const links = [
  { path: "/", label: "Home" },
  { path: "/products", label: "Posters" },
  { path: "/bestsellers", label: "Bestsellers" },
];

export const MenuItems = () => {
  return (
    <div>
      <ul>
        {links.map(({ path, label }) => (
          <li key={path}>
            <NavLink to={path}>{label}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
