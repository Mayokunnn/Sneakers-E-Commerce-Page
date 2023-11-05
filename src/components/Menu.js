import closeIcon from "../images/icon-close.svg";
import { navItems } from "./App";

export function Menu({ setMenu }) {
  return (
    <div className="bg-white h-screen md:hidden w-3/4 fixed z-10 flex flex-col gap-12 pl-7 py-6">
      <div>
        <img
          className="cursor-pointer"
          onClick={() => setMenu(false)}
          src={closeIcon}
          alt="Close"
        ></img>
      </div>
      <ul className="space-y-4 ">
        {navItems.map((item, i) => (
          <li
            className="cursor-pointer font-bold tracking-wide text-darkGrayishBlue hover:text-veryDarkBlue"
            key={i}
          >
            {item}
          </li>
        ))}{" "}
      </ul>
    </div>
  );
}
