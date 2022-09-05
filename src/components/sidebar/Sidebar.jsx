import React from "react";
import "./sidebar.css";
import {
  LineStyle,
  PersonAdd,
  Description,
  SupervisedUserCircle,
  History,
  Subscriptions,
} from "@material-ui/icons";
import { NavLink } from "react-router-dom";

// // Get the container element
// var btnContainer = document.getElementByClassName("sidebarWrapper");

// // Get all buttons with class="btn" inside the container
// var btns = btnContainer.getElementsByClassName("sidebarListItem");

// // Loop through the buttons and add the active class to the current/clicked button
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function () {
//     var current = document.getElementsByClassName("active");

//     // If there's no active class
//     if (current.length > 0) {
//       current[0].className = current[0].className.replace(" active", "");
//     }

//     // Add the active class to the current/clicked button
//     this.className += " active";
//   });
// }

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <NavLink to="/" className="link">
              <li className="sidebarListItem">
                <LineStyle className="sidebarIcon" />
                Home
              </li>
            </NavLink>
            <NavLink to="/newuser" className="link">
              <li className="sidebarListItem">
                <PersonAdd className="sidebarIcon" />
                Add Users
              </li>
            </NavLink>

            <NavLink to="/gamerules" className="link">
              <li className="sidebarListItem">
                <Description className="sidebarIcon" />
                Game Rules
              </li>
            </NavLink>

            <NavLink to="/userlist" className="link">
              <li className="sidebarListItem">
                <SupervisedUserCircle className="sidebarIcon" />
                All Users
              </li>
            </NavLink>
            <li className="sidebarListItem">
              <History className="sidebarIcon" />
              Game Log
            </li>
            <li className="sidebarListItem">
              <Subscriptions className="sidebarIcon" />
              All Subscriptions
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
