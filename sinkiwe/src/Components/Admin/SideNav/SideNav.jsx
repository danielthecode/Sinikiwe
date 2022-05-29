import React, { useContext } from "react";
import "./sidenav.scss";

import { auth } from "../../../firebase";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import { signOut } from "firebase/auth";

function SideNav() {
  const navigate = useNavigate();

  const { dispatch } = useContext(AuthContext);

  function openNav() {
    document.getElementById("mySidenav").style.width = "350px";
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  const handleLogout = (e) => {
    e.preventDefault();

    signOut(auth);
    dispatch({ type: "LOGOUT", payload: null });
    navigate("/admin/login");
  };

  return (
    <div className="nav">
      <div id="mySidenav" className="sidenav">
        <button className="closebtn" onClick={closeNav}>
          <h3>&times;</h3>
        </button>

        <div className="nav-item">
          <div className="group">Portraiture</div>
          <Link to="/admin/portraiture-upload">Upload Portaiture Image</Link>
          <Link to="/admin/view-portraiture">View Portaiture Images</Link>
        </div>
        <div className="nav-item">
          <div className="group">Nature</div>
          <Link to="/admin/nature-upload">Upload Nature Image</Link>
          <Link to="/admin/view-nature">View Nature Image</Link>
        </div>
        <div className="nav-item">
          <div className="group">Wedding</div>
          <Link to="/admin/weddings-upload">Upload Wedding Image</Link>
          <Link to="/admin/view-weddings">View Wedding Images</Link>
        </div>
        <div className="nav-item">
          <div className="group">Fine Art</div>
          <Link to="/admin/fineart-upload">Upload Fine Art Image</Link>
          <Link to="/admin/view-fineart">View Fine Art Images</Link>
        </div>
      </div>
      <div className="navhead">
        <div className="openbtn">
          <span onClick={openNav}>&#9776; Menu</span>
        </div>
        <div className="logout">
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </div>
  );
}

export default SideNav;
