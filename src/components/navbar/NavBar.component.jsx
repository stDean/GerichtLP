import { useState } from "react";
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

import "./navbar.styles.css";
import { images } from '../../constants/images';

const NavBar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);
  const navData = [
    {
      id: 1,
      name: "Home",
      path: "#home"
    },
    {
      id: 2,
      name: "About",
      path: "#about"
    },
    {
      id: 3,
      name: "Menu",
      path: "#menu"
    },
    {
      id: 4,
      name: "Awards",
      path: "#awards"
    },
    {
      id: 5,
      name: "Contact",
      path: "#contact"
    }
  ]

  return (
    <nav className="app__navbar">
      {/* Desktop Nav */}

      <div className="app__navbar-logo">
        <img src={images.gericht} alt="app__logo" />
      </div>

      <ul className="app__navbar-links">
        {
          navData.map(item => (
            <li className="p__opensans" key={item.id}>
              <a href={item.path}>{item.name}</a>
            </li>
          ))
        }
      </ul>

      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">Log In / Registration</a>
        <div />
        <a href="/" className="p__opensans">Book Table</a>
      </div>

      {/* End */}

      {/* Mobile nav */}

      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
          style={{ cursor: 'pointer' }}
        />

        {
          toggleMenu && (
            <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
              <MdOutlineRestaurantMenu
                fontSize={27}
                className="overlay__close"
                onClick={() => setToggleMenu(false)}
              />

              <ul className="app__navbar-smallscreen_link">
                {
                  navData.map(item => (
                    <li
                      className="p__opensans"
                      key={item.id}
                      onClick={() => setToggleMenu(false)}
                    >
                      <a href={item.path}>{item.name}</a>
                    </li>
                  ))
                }
              </ul>
            </div>
          )
        }
      </div>

      {/* End */}
    </nav>
  )
}

export default NavBar