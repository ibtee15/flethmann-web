import React, { useState, useEffect } from "react";
import "./user.css";
import logoBlue from "../../components/images/logoblue.png";
import { Link, useHistory, useParams } from "react-router-dom";
import { ArrowBack, Delete } from "@material-ui/icons";
import { getUsers } from "../../services/user.services";

export default function User(props) {
  let history = useHistory();

  const { id } = useParams();

  const [userData, setUserData] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [particularUserData, setParticularUserData] = useState();

  const toggleDelete = () => {
    setIsVisible(!isVisible);
  };

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
    const result = userData?.find((item) => item._id === id);
    setParticularUserData(result);
    console.log("08", result);
  }, [userData]);

  return (
    <div className="user">
      <div className="userHeader">
        <div className="titleWithBack">
          <button className="backBtn" onClick={() => history.goBack()}>
            <ArrowBack className="backBtnIcon" />
          </button>
          <h1 className="userTitle">User Details</h1>
        </div>
        <img className="userLogo" src={logoBlue} alt="logo" width="150px"></img>
      </div>

      <div className="userDetailsView">
        <div className="userDetailsViewR1">
          <div className="userDetailsUserName">
            <span>User Name:</span> {particularUserData?.userName}
          </div>
          <button onPress={toggleDelete} className="deleteBtn">
            <Delete className="deleteBtnIcon" />
          </button>
        </div>
        <div className="userDetailsViewR2">
          <div className="userDetailsUserEmail">
            <span>Email Address:</span> {particularUserData?.email}
          </div>
          <div className="userDetailsUserContact">
            <span>Contact:</span> {particularUserData?.contactNumber}
          </div>
        </div>
      </div>
    </div>
  );
}
