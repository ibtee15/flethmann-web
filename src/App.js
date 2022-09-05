import React from "react";
import Dashboard from "./components/dashboard/Dashboard";
import Preferences from "./components/preferences/Preferences";
import Login from "./pages/login/Login";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import GameRules from "./pages/gameRules/GameRules";
import RuleDetails from "./pages/ruleDetails/RuleDetails";
import AddRule from "./pages/addRule/AddRule";

import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { getToken, saveToken } from "./useToken";

function App() {
  // const { token, setToken } = useToken();
  // // if (!token) {
  //   return <Login setToken={setToken} />;
  // }
  return (
    <Router>
      <Topbar />
      <div className="container">
        {!getToken() ? (
          <Route>
            <Login />
          </Route>
        ) : (
          <>
            <Sidebar />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/userlist">
                <UserList />
              </Route>
              <Route path="/user/:id">
                <User />
              </Route>
              <Route path="/newUser">
                <NewUser />
              </Route>
              <Route path="/gameRules">
                <GameRules />
              </Route>
              <Route path="/ruleDetails/:id">
                <RuleDetails />
              </Route>
              <Route path="/addRule">
                <AddRule />
              </Route>
            </Switch>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
