import { useState } from "react";
import Link from "../Link/Link";

const NavBar = () => {
  const [routes, setRoutes] = useState([]);
  useState(() => {
    fetch("routes.json")
      .then((res) => res.json())
      .then((data) => setRoutes(data));
  }, []);
  return (
    <nav>
      <ul className="md:flex">
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
