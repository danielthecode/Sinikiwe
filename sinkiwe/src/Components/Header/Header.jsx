import React, { useState, useEffect } from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import hamburger_open from "../../Images/open.svg";
import hamburger_close from "../../Images/hamburger_icon_close.svg";

import AOS from "aos";
import "aos/dist/aos.css";

function Header() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };

  const close = () => {
    if (menuOpen === true) {
      setMenuOpen(false);
    } else {
      setMenuOpen(false);
    }
  };

  return (
    <>
      <div className={menuOpen ? "header open" : "header close"}>
        <div className="container">
          <nav className={menuOpen ? "nav open" : "nav close"}>
            <div className="logo">
              <Link to="/" onClick={close}>
                SINIKIWE
                <div className="sub-heading">photographer</div>
              </Link>
            </div>

            <ul className="ul-items">
              <li>
                <Link to="/portraiture" onClick={close}>
                  Portraiture
                </Link>
              </li>
              <li>
                <Link to="/nature" onClick={close}>
                  Nature
                </Link>
              </li>
              <li>
                <Link to="/weddings" onClick={close}>
                  Wedding
                </Link>
              </li>
              <li>
                <Link to="/fineart" onClick={close}>
                  Fine Art
                </Link>
              </li>
            </ul>

            <div className="contact">
              <div className="email">
                <a href="mailto:contact@carkeyexperts.co.uk">
                  ashleemlambo@gmail.com
                </a>
              </div>
              <div className="socials">
                <div className="icon">
                  <a
                    href="https://www.instagram.com/ashleemlambo/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaInstagram size={30} />
                  </a>
                </div>
                <div className="icon">
                  <a
                    href="https://web.facebook.com/profile.php?id=100010456119262"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaFacebook size={30} />
                  </a>
                </div>
              </div>
            </div>

            <div className="collapse">
              {menuOpen ? (
                <img
                  src={hamburger_close}
                  alt="open menu"
                  onClick={menuToggleHandler}
                />
              ) : (
                <img
                  src={hamburger_open}
                  alt="close menu"
                  onClick={menuToggleHandler}
                />
              )}
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Header;
