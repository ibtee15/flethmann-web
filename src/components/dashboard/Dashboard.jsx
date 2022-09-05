import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./dashboard.css";
import Sidebar from "../sidebar/Sidebar";
import Topbar from "../topbar/Topbar";
import Home from "../../pages/home/Home";
import UserList from "../../pages/userList/UserList";
import User from "../../pages/user/User";
import NewUser from "../../pages/newUser/NewUser";

function Dashboard() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          {/* <Route exact path="/">
            <Home />
          </Route> */}
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Dashboard;
