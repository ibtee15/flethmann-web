import React, { useState, useEffect } from "react";
import "./userList.css";
import logoBlue from "../../components/images/logoblue.png";
import { Link, useHistory } from "react-router-dom";
import {
  ArrowBack,
  ArrowForward,
  AccountCircleOutlined,
} from "@material-ui/icons";
import { getUsers } from "../../services/user.services";

export default function UserList(props) {
  let history = useHistory();

  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fnt = async () => {
      try {
        setLoading(true);
        const response = await getUsers(
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluMkBnbWFpbC5jb20iLCJpYXQiOjE2NjE2MTU0OTgsImV4cCI6MTY3MDI1NTQ5OH0.0DBCYmPT8keiaZA9pdHoTn2QyX9aYUr_oScqD3In9VM"
        );
        console.log("user list successfull =====>>>", response.data);
        setUserData(response.data);
      } catch (error) {
        console.log("errorrrrrrr in all user list", error);
      } finally {
        setLoading(false);
      }
    };
    fnt();
  }, []);

  useEffect(() => {
    console.log("88", userData);
  }, [userData]);

  return (
    <div className="userList">
      <div className="userListHeader">
        <div className="titleWithBack">
          <button className="backBtn" onClick={() => history.goBack()}>
            <ArrowBack className="backBtnIcon" />
          </button>
          <h1 className="userListTitle">All Users</h1>
        </div>
        <img
          className="userListLogo"
          src={logoBlue}
          alt="logo"
          width="150px"
        ></img>
      </div>

      {userData?.map((item) => {
        return (
          <div className="userListContainer">
            <div>
              <AccountCircleOutlined className="userListImg" />
            </div>

            <div className="userAgeView">
              <p className="userListUserName">{item?.userName}</p>
              <div className="line" />
              <p className="userListUserEmail">{item?.email}</p>
            </div>

            <Link to={"/User/" + item._id}>
              <button
                className="fwdBtn"
                onPress={() => props.navigation.navigate("User")}
              >
                <ArrowForward sx={{ fontSize: 50 }} />
              </button>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
