import React from "react";
import "./topbar.css";
import Logo from "./logo.png";
import { Language, Settings } from "@material-ui/icons";
import LogoutIcon from "@mui/icons-material/Logout";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="adminHead">ADMIN</span>
        </div>
        <div className="topLeft">
          <img className="logo" src={Logo} alt="Brand Logo"></img>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <div className="topbarIconContainer">
            <LogoutIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
