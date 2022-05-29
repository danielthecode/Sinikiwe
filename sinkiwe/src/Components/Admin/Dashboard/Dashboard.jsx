import React from "react";
import SideNav from "../SideNav/SideNav";
import "./dashboard.scss";

function Dashboard() {
  return (
    <div>
      <SideNav />
      <div className="dashboard-container">
        <div className="intro">Welcome Ashlee</div>
        <div className="dashboard-content">
          <div className="dashboard-card">
            <div className="title">Portraiture</div>
            <div className="links">
              <a href="portraiture-upload">Upload Images</a>
              <a href="view-portraiture">View Images</a>
            </div>
          </div>
          <div className="dashboard-card">
            <div className="title">Nature</div>
            <div className="links">
              <a href="nature-upload">Upload Images</a>
              <a href="view-nature">View Images</a>
            </div>
          </div>
          <div className="dashboard-card">
            <div className="title">Weddings</div>
            <div className="links">
              <a href="weddings-upload">Upload Images</a>
              <a href="view-weddings">View Images</a>
            </div>
          </div>
          <div className="dashboard-card">
            <div className="title">Fine Art</div>
            <div className="links">
              <a href="fineart-upload">Upload Images</a>
              <a href="view-fineart">View Images</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
