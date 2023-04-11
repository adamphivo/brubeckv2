import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useLocation } from "react-router-dom";

export default function NavigationBar() {
  const location = useLocation();
  const pages = [
    { to: "/", icon: "material-symbols:home-outline-rounded" },
    { to: "/dashboard", icon: "material-symbols:dashboard-rounded" },
    { to: "/api", icon: "material-symbols:api-rounded" },
  ];

  const list = pages.map((item, index) => (
    <Link
      key={index}
      to={item.to}
      className={`text-white w-full h-full items-center justify-center flex hover:bg-orange-500 hover:text-white transition ease-in duration-100 ${
        item.to === location.pathname ? "bg-orange-400 text-white" : ""
      }`}
    >
      <li>
        <Icon width="34" icon={item.icon} />
      </li>
    </Link>
  ));

  return (
    <div className="w-full bg-neutral-900 md:h-full flex flex-col md:flex-row">
      <ul className="flex w-full justify-around h-full items-center md:flex-col md:justify-center">
        {list}
      </ul>
    </div>
  );
}
