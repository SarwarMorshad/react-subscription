import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
  const [routes, setRoutes] = useState([]);
  const [open, setOpen] = useState(false);

  useState(() => {
    fetch("routes.json")
      .then((res) => res.json())
      .then((data) => setRoutes(data));
  }, []);
  return (
    <nav>
      <div className=" md:hidden text-2xl" onClick={() => setOpen(!open)}>
        {open === true ? <AiOutlineClose></AiOutlineClose> : <AiOutlineMenu className=""></AiOutlineMenu>}
      </div>
      <ul
        className={`md:flex duration-500 absolute md:static
            ${open ? "top-8" : "-top-60"}
            ${open ? "bg-orange-500" : ""} justify-center mt-4 text-2xl`}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
