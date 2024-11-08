
import { NavbarData } from "../data/Navbar";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="w-full h-[45px] flex justify-around items-center p-4 bg-black gap-x-8">
      <div className="text-white font-sans text-2xl font-medium">
        PasteApp
      </div>
      <div className="flex justify-center items-center p-4 gap-x-8">
        {NavbarData.map((link, idx) => (
          <NavLink
            key={idx}
            to={link.path}
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-bold text-xl"
                : "text-white font-medium text-xl"
            }
          >
            {link.title}
          </NavLink>
        ))}
      </div>

    </div>
  );
};

export default Navbar;
