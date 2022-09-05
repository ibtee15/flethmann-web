import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import "./ruleDetails.css";
import logoBlue from "../../components/images/logoblue.png";
import { Delete, Edit, Check, Sync, ArrowBack } from "@material-ui/icons";
import { updateRule } from "../../services/game.services.js";
import { getRules } from "../../services/game.services.js";

const initialState = {
  id: "",
  ruleName: "",
  ruleId: "",
  gender: "",
  gamePeriods: "",
  periodDuration: "",
  gapBetweenPeriods: "",
  gapBetweenHalves: "",
  timeoutsPerHalf: "",
  timeoutsInOvertimePeriod: "",
  maxOvertimePeriods: "",
  overtimePeriodDuration: "",
  goalDiffForRunningClock: "",
  maxPersonalFouls: "",
  maxFOViolationPerHalf: "",
};

export default function RuleDetails(props) {
  const initialState = {
    id: "",
    ruleName: "",
    ruleId: "",
    gender: "",
    gamePeriods: "",
    periodDuration: "",
    gapBetweenPeriods: "",
    gapBetweenHalves: "",
    timeoutsPerHalf: "",
    timeoutsInOvertimePeriod: "",
    maxOvertimePeriods: "",
    overtimePeriodDuration: "",
    goalDiffForRunningClock: "",
    maxPersonalFouls: "",
    maxFOViolationPerHalf: "",
  };

  const [initialStateForm, setInitialStateForm] = useState(initialState);
  const [editable, setEditable] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [ruleData, setRuleData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [particularRuleData, setParticularRuleData] = useState();

  const { id } = useParams();

  const toggleDelete = () => {
    setIsVisible(!isVisible);
  };

  const toggleEdit = () => {
    setEditable(!editable);
  };

  const handleFormChange = (name, value) => {
    setInitialStateForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleUpdate = async () => {
    // console.log(initialStateForm);
    try {
      setLoading(true);
      const response = await updateRule(
        initialStateForm,
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluMkBnbWFpbC5jb20iLCJpYXQiOjE2NjE2MTU0OTgsImV4cCI6MTY3MDI1NTQ5OH0.0DBCYmPT8keiaZA9pdHoTn2QyX9aYUr_oScqD3In9VM"
      );
      // console.log('editRule request workingggggg', response.data);
      setEditable(!editable);
    } catch (e) {
      console.log("errorrrrrrr in api", e?.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fnt = async () => {
      try {
        setLoading(true);
        const response = await getRules(
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluMkBnbWFpbC5jb20iLCJpYXQiOjE2NjE2MTU0OTgsImV4cCI6MTY3MDI1NTQ5OH0.0DBCYmPT8keiaZA9pdHoTn2QyX9aYUr_oScqD3In9VM"
        );
        // console.log('rulessssssss found ==>>>', response.data);
        setRuleData(response.data);
      } catch (err) {
        console.log("errorrrrrrrr at rules", err);
      } finally {
        setLoading(false);
      }
    };
    fnt();
  }, []);

  useEffect(() => {
    const result = ruleData?.find((item) => item._id === id);
    setParticularRuleData(result);
    console.log("08", result);
  }, [ruleData]);

  let history = useHistory();

  return (
    <div className="ruleDetails">
      <div className="ruleDetailsHeader">
        <div className="titleWithBack">
          <button className="backBtn" onClick={() => history.goBack()}>
            <ArrowBack className="backBtnIcon" />
          </button>
          <h1 className="ruleDetailsTitle">Rule Details</h1>
        </div>
        <div className="toEditBtns">
          <button onPress={toggleDelete} className="deleteBtn">
            <Delete className="deleteBtnIcon" />
          </button>
          {!editable ? (
            <button onPress={toggleEdit} className="editBtn">
              <Edit className="editBtnIcon" />
            </button>
          ) : (
            <button onPress={handleUpdate} className="editBtn">
              {loading ? (
                <Sync color="#fff" />
              ) : (
                <Check className="editBtnIcon" />
              )}
            </button>
          )}
        </div>
        <img
          className="ruleDetailsLogo"
          src={logoBlue}
          alt="logo"
          width="150px"
        ></img>
      </div>
      <h1 className="ruleName">{particularRuleData?.ruleName}</h1>
      <div className="view2Div">
        <button className="view2Btn1">
          Rule: {particularRuleData?.ruleId}
        </button>
        <button className="view2Btn2">
          Gender: {particularRuleData?.gender}
        </button>
      </div>
      <div className="ruleView">
        <h4 className="genTxt">Periods Per Game :</h4>
        <input
          editable={editable}
          // underlineColorAndroid={false}
          className="input"
          value={particularRuleData?.gamePeriods}
        />
      </div>
      <div className="ruleView">
        <h4 className="genTxt">Minutes Per Period :</h4>
        <input
          editable={editable}
          // underlineColorAndroid={false}
          className="input"
          value={particularRuleData?.periodDuration}
        />
      </div>
      <div className="ruleView">
        <h4 className="genTxt">Minutes Between Periods :</h4>
        <input
          editable={editable}
          // underlineColorAndroid={false}
          className="input"
          value={particularRuleData?.gapBetweenPeriods}
        />
      </div>
      <div className="ruleView">
        <h4 className="genTxt">Minutes Between Halves :</h4>
        <input
          editable={editable}
          // underlineColorAndroid={false}
          className="input"
          value={particularRuleData?.gapBetweenHalves}
        />
      </div>
      <div className="ruleView">
        <h4 className="genTxt">Timeout Per Half :</h4>
        <input
          editable={editable}
          // underlineColorAndroid={false}
          className="input"
          value={particularRuleData?.timeoutsPerHalf}
        />
      </div>
      <div className="ruleView">
        <h4 className="genTxt">Timeouts in Overtime :</h4>
        <input
          editable={editable}
          // underlineColorAndroid={false}
          className="input"
          value={particularRuleData?.timeoutsInOvertimePeriod}
        />
      </div>
      <div className="ruleView">
        <h4 className="genTxt">No. of Overtime Periods :</h4>
        <input
          editable={editable}
          // underlineColorAndroid={false}
          className="input"
          value={particularRuleData?.maxOvertimePeriods}
        />
      </div>
      <div className="ruleView">
        <h4 className="genTxt">Minutes per Overtime Periods :</h4>
        <input
          editable={editable}
          // underlineColorAndroid={false}
          className="input"
          value={particularRuleData?.overtimePeriodDuration}
        />
      </div>
      <div className="ruleView">
        <h4 className="genTxt">Max # of Personal Fouls :</h4>
        <input
          editable={editable}
          // underlineColorAndroid={false}
          className="input"
          value={particularRuleData?.maxPersonalFouls}
        />
      </div>
      <div className="ruleView">
        <h4 className="genTxt">Max # of FO Violations Per Half :</h4>
        <input
          editable={editable}
          // underlineColorAndroid={false}
          className="input"
          value={particularRuleData?.maxFOViolationPerHalf}
        />
      </div>
    </div>
  );
}
