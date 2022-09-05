import React, { useState, useEffect } from "react";
import "./newUser.css";
import logoBlue from "./logoblue.png";
import { ArrowBack } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import { createUser } from "../../services/user.services";

const initialState = {
  userName: "",
  email: "",
  password: "",
  contactNumber: "",
  deviceTokens:
    "chJjVsFUR_yF1UDXkREoYF:APA91bFL5EHH0121KJAxT3r8TCBP26m58ctKAoAzQNAMi_IoblChUV0KRRCEHHtY-jDCQ78IC-lpMdJc_iH7DY4jg2DT00sfoQP9aM8MdiUSyRwIImNiCgBuKfVJp_kJynk5cii3D4-n",
};

export default function NewUser(props) {
  const [initialStateForm, setInitialStateForm] = useState(initialState);
  const [loading, setLoading] = useState(false);

  const handleFormChange = (name, value) => {
    setInitialStateForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    console.log("called func", initialStateForm);
    // return;
    try {
      setLoading(true);
      const response = await createUser(
        initialStateForm,
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluMkBnbWFpbC5jb20iLCJpYXQiOjE2NjE2MTU0OTgsImV4cCI6MTY3MDI1NTQ5OH0.0DBCYmPT8keiaZA9pdHoTn2QyX9aYUr_oScqD3In9VM"
      );
      console.log("request workingggggg", response.data);
      // toggleSuccessModal();
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  let history = useHistory();

  return (
    <div className="newUser">
      <div className="titleWithBack">
        <button className="backBtn" onClick={() => history.goBack()}>
          <ArrowBack className="backBtnIcon" />
        </button>
      </div>
      <img
        className="newUserLogo"
        src={logoBlue}
        alt="logo"
        width="200px"
      ></img>
      <h1 className="newUserTitle">Create User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <input
            type="text"
            placeholder="User Name"
            value={initialStateForm.userName}
            onChange={(e) => handleFormChange("userName", e.target.value)}
          />
        </div>
        <div className="newUserItem">
          <input
            type="email"
            placeholder="User Email Address"
            value={initialStateForm.email}
            onChange={(e) => handleFormChange("email", e.target.value)}
          />
        </div>
        <div className="newUserItem">
          <input
            type="password"
            placeholder="Password"
            value={initialStateForm.password}
            onChange={(e) => handleFormChange("password", e.target.value)}
          />
        </div>
        <div className="newUserItem">
          <input
            type="text"
            placeholder="Contact Number"
            value={initialStateForm.contactNumber}
            onChange={(e) => handleFormChange("contactNumber", e.target.value)}
          />
        </div>
        <div className="newUserItemEmpty"></div>
        <button className="newUserButton" onClick={handleCreate}>
          Create
        </button>
      </form>
    </div>
  );
}
