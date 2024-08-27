import { useState } from "react";
import { assets } from "../../assets/frontend_assets/assets";

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div
      className="navbar"
      class="pl-1 pr-1 pt-10 pb-10 flex justify-between items-center w-150"
    >
      <img
        src={assets.logo}
        alt="navbar image"
        className="logo"
        class="w-150"
      />
      <ul
        className="navbar-menu"
        class="flex list-none gap-8 text-[#49557e] text-[18px]"
      >
        <li className={menu === "home" ? "active" : ""}>home</li>
        <li className={menu === "menu" ? "active" : ""}>menu</li>
        <li className={menu === "mobile app" ? "active" : ""}>mobile-app</li>
        <li className={menu === "contact us" ? "active" : ""}>contact us</li>
      </ul>
      <div className="navbar-right" class="flex items-center gap-8 ">
        <img src={assets.search_icon} alt="search icon" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="basket icon" />
          <div className="dot"></div>
        </div>
        <button class="bg-transparent text-[16px] text-[#49557e] hover:bg-[#fff4f2] transition duration-[300ms] ease-in-out border border-solid border-[#ff6347] px-4 py-3 rounded-[50px] cursor-pointer ">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Navbar;
