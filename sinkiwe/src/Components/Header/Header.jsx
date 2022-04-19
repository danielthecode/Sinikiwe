import React, {useState} from 'react';
import "./header.scss";
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import hamburger_open from "../../Images/open.svg";
import hamburger_close from "../../Images/hamburger_icon_close.svg";


function Header() {

  const [menuOpen, setMenuOpen] = useState(false)
  const menuToggleHandler = () => {
    setMenuOpen((p) => !p)
  }

  const close = () => {
    if (menuOpen === true) {
        setMenuOpen(false)
    }
    else {
      setMenuOpen(false)
    }
  }

  return (
    <>
    <div className="header">
      <div className="container">
        <nav className={menuOpen ? 'nav open' : 'nav close'}>
          <div className="logo">
            <Link to="/home" onClick={close}>
              SINIKIWE
              <div className="sub-heading">photographer</div>
            </Link>
          </div>

          <ul className='ul-items'>
            <li>
            <Link to="home">Portraiture</Link>
            </li>
            <li>
            <Link to="home">Nature</Link>
            </li>
            <li>
            <Link to="home">Wedding</Link>
            </li>
            <li>
            <Link to="home">Fine Art</Link>
            </li>
          </ul>
          
          <div className="contact">
          <div className="email">ashleemlambo@gmail.com</div>
          <div className="socials">
            <div className="icon">
             <a href="https://www.instagram.com/ashleemlambo/" target="_blank" rel="noreferrer"><FaInstagram size={30}/></a>
            </div>
            <div className="icon">
            <a href="https://www.facebook.com/Car-Keys-Remotes-UK-100636342171376/" target="_blank" rel="noreferrer"><FaFacebook size={30}/></a>
            </div>
          </div>
        </div>

        <div className="collapse">
            {menuOpen ? <img src={hamburger_close} alt="open menu" onClick={menuToggleHandler} /> :
            <img src={hamburger_open} alt="close menu" onClick={menuToggleHandler} />}
          </div>
        </nav>

        
      </div>
    </div>
    </>
  )
}

export default Header