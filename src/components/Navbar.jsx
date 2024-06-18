import { useEffect, useRef, useState } from "react";

import Logo from "../assets/logo.svg";
import iconMenu from "../assets/icon-menu.svg";
import iconClose from "../assets/icon-close.svg";
import iconCart from "../assets/icon-cart.svg";
import iconCartDark from "../assets/icon-cart-dark.svg";
import imageAvatar from "../assets/image-avatar.png";

import Cart from "./Cart";

function Navbar({
  cartInfo,
  setCartInfo,
  setMessage,
  setDisplayMessage,
  setNavHeight,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartHovered, setIsCartHovered] = useState(false);
  const [showCart, setShowCart] = useState(false);

  function handleOpenMenu() {
    setIsMenuOpen(true);
  }

  function handleCloseMenu() {
    setIsMenuOpen(close);
  }

  function handleShowCart() {
    setShowCart((c) => !c);

    if (!cartInfo.quantity && showCart) {
      setIsCartHovered(false);
    } else {
      setIsCartHovered(true);
    }
  }

  const navRef = useRef(null);

  {
    /***** This sets the navHeight to the current nav height */
  }
  useEffect(() => {
    if (navRef.current) {
      setNavHeight(navRef.current.offsetHeight);
    }
  }, [navRef, setNavHeight]);

  return (
    <nav className="fixed top-0 left-0 w-full h-max z-10 bg-white">
      <main
        className="relative w-full max-w-[760px] lg:max-w-[1000px] mx-auto p-5  flex items-center justify-between md:p-8 md:px-0 md:pb-0 md:items-start md:border-b-[1px] md:border-b-grayish-blue"
        ref={navRef}
      >
        <div className="w-max flex items-center space-x-3 md:space-x-10 md:items-start">
          {/***** Menu Icon */}
          <img
            src={iconMenu}
            className="h-4 md:hidden"
            onClick={handleOpenMenu}
          />

          {/****** Logo */}
          <img src={Logo} className="h-4 md:h-5 md:!ml-0" />

          {/*** Desktop Menu */}
          <section className="hidden md:block">
            <ul className="flex space-x-6 text-dark-grayish-blue font-medium text-lg">
              <li className="pb-8 cursor-pointer border-b-4 border-transparent md:text-black md:border-b-orange">
                Collections
              </li>

              <li className="pb-8 cursor-pointer border-b-4 border-transparent hover:text-black hover:border-b-orange">
                Men
              </li>

              <li className="pb-8 cursor-pointer border-b-4 border-transparent hover:text-black hover:border-b-orange">
                Women
              </li>

              <li className="pb-8 cursor-pointer border-b-4 border-transparent hover:text-black hover:border-b-orange">
                About
              </li>

              <li className="pb-8 cursor-pointer border-b-4 border-transparent hover:text-black hover:border-b-orange">
                Contact
              </li>
            </ul>
          </section>
        </div>

        {/***** Cart Icon */}
        <div className="w-max flex items-center space-x-5 md:space-x-8">
          <div className="relative" onClick={handleShowCart}>
            <img
              src={isCartHovered || cartInfo.quantity ? iconCartDark : iconCart}
              className="h-4 fill-black"
              onMouseEnter={() => setIsCartHovered(true)}
              onMouseLeave={() => setIsCartHovered(false)}
            />

            <div
              className={`${
                !cartInfo.quantity ? "hidden" : ""
              } absolute -top-1 -right-1 bg-orange px-[0.4rem] py-[0.1rem] rounded-full flex items-center justify-center text-[8px] text-white font-bold`}
            >
              <p className="w-max">{cartInfo.quantity}</p>
            </div>
          </div>

          {/***** Image Avatar */}
          <img
            src={imageAvatar}
            className="h-7 md:h-9 rounded-full md:border-2 md:border-transparent md:hover:border-2 md:hover:border-orange"
          />
        </div>

        {/*** Mobile Menu */}

        <section
          className={`absolute top-0 left-0 overflow-hidden h-[100vh] bg-black-opacified-bg transition-all duration-200 ease-linear z-30 md:hidden ${
            isMenuOpen ? "w-full" : "w-0"
          }`}
        >
          <main className="w-[250px] h-full flex flex-col space-y-8 bg-white p-6">
            <img
              src={iconClose}
              className="w-max h-4"
              onClick={handleCloseMenu}
            />

            <ul className="flex flex-col space-y-4 font-bold text-xl">
              <li>Collections</li>

              <li>Men</li>

              <li>Women</li>

              <li>About</li>

              <li>Contact</li>
            </ul>
          </main>
        </section>

        {/**** Cart  */}

        <Cart
          cartInfo={cartInfo}
          setCartInfo={setCartInfo}
          showCart={showCart}
          setShowCart={setShowCart}
          setMessage={setMessage}
          setDisplayMessage={setDisplayMessage}
        />
      </main>
    </nav>
  );
}

export default Navbar;
