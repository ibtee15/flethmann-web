import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import "./addRule.css";
import logoBlue from "../../components/images/logoblue.png";
import { Delete, Edit, Check, Sync, ArrowBack } from "@material-ui/icons";
import { createRule } from "../../services/game.services.js";

const initialState = {
  ruleName: "",
  ruleId: "",
  gender: "",
  gamePeriods: 0,
  periodDuration: 0,
  gapBetweenPeriods: 0,
  gapBetweenHalves: 0,
  timeoutsPerHalf: 0,
  timeoutsInOvertimePeriod: 0,
  maxOvertimePeriods: 0,
  overtimePeriodDuration: 0,
  goalDiffForRunningClock: 0,
  maxPersonalFouls: 0,
  maxFOViolationPerHalf: 0,
};

export default function AddRule(props) {
  const [visible, setVisible] = useState(false);

  const [initialStateForm, setInitialStateForm] = useState(initialState);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFormChange = (name, value) => {
    setInitialStateForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    console.log("created rule data", initialStateForm);
    return;
    try {
      setLoading(true);
      const response = await createRule(
        initialStateForm,
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluMkBnbWFpbC5jb20iLCJpYXQiOjE2NjE2MTU0OTgsImV4cCI6MTY3MDI1NTQ5OH0.0DBCYmPT8keiaZA9pdHoTn2QyX9aYUr_oScqD3In9VM"
      );
      // console.log('request workingggggg', response.data);
      // toggleSuccessModal();
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  };
  let history = useHistory();

  return (
    <div className="addRule">
      <div className="addRuleHeader">
        <div className="titleWithBack">
          <button className="backBtn" onClick={() => history.goBack()}>
            <ArrowBack className="backBtnIcon" />
          </button>
          <h1 className="addRuleTitle">Add New Rule</h1>
        </div>
        <img
          className="addRuleLogo"
          src={logoBlue}
          alt="logo"
          width="150px"
        ></img>
      </div>

      <form className="addRuleForm">
        <div className="ruleNameCodeBox">
          <div className="addRuleItem">
            <input
              type="text"
              placeholder="Enter Group/ Rule Name"
              value={initialStateForm.ruleName}
              onChange={(e) => handleFormChange("ruleName", e.target.value)}
            />
          </div>
          <div className="addRuleItem">
            <input
              type="text"
              placeholder="B/G or M/F + rule code"
              value={initialStateForm.ruleId}
              onChange={(e) => handleFormChange("ruleId", e.target.value)}
            />
          </div>
        </div>
        <div className="addRuleDesc">
          <input
            id="r1"
            type="radio"
            value="male"
            name="gender"
            onChange={(e) => handleFormChange("gender", e.target.value)}
          />
          <label for="r1">Male</label>
          <input
            id="r2"
            type="radio"
            value="female"
            name="gender"
            onChange={(e) => handleFormChange("gender", e.target.value)}
          />
          <label for="r2">Female</label>
        </div>

        <div className="addRuleView">
          <h4 className="addRuleTxt">Periods per Game :</h4>
          <input className="input" />
        </div>

        <button className="addRuleButton" onClick={handleCreate}>
          Create
        </button>
      </form>
    </div>
  );
}
