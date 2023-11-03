import logo from "../images/logo.svg";
import cartNav from "../images/icon-cart nav.svg";
import avatar from "../images/image-avatar.png";
import menu from "../images/icon-menu.svg";
import { Cart } from "./Cart";
import { NavLink } from "./NavLink";
import { navItems } from "./App";

export function NavBar({
  array,
  setArray,
  setItemsCount,
  isCartOpen,
  handleCartClick,
}) {
  return (
    <div className="container mx-auto">
      <div className="w-full flex justify-between md:gap-3 p-7 border-b-[1px] relative ">
        <div className="flex gap-2 md:gap-8 lg:gap-16 items-center">
          <button className=" md:hidden h-3 md:h-6">
            <img src={menu} alt="Menu"></img>
          </button>
          <img src={logo} alt="Sneakers" className="h-4 md:h-6 md:mr-1"></img>
          <ul className="hidden md:flex space-x-4 ">
            {navItems.map((item, i) => (
              <NavLink text={item} key={i + 1} />
            ))}
          </ul>
        </div>
        <div className="flex space-x-5 md:space-x-10 items-center">
          <div className="cursor-pointer relative" onClick={handleCartClick}>
            <img src={cartNav} alt="Cart" className="h-4 md:h-6 "></img>
            {array.length > 0 && (
              <span className="text-sm absolute badge bg-orange rounded-lg p-0 font-medium text-white px-1 flex items-center md:p-2 py-0 ">
                {array.length}
              </span>
            )}
          </div>
          <div className="flex w-6 md:w-10 hover:border-2 cursor-pointer p-0 rounded-full hover:border-orange">
            <img className="w-full" src={avatar} alt="Avatar"></img>
          </div>
        </div>
        {isCartOpen && (
          <Cart array={array} setArray={setArray} setCount={setItemsCount} />
        )}
      </div>
    </div>
  );
}
