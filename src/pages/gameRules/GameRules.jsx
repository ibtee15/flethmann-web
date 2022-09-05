import React, { useState, useEffect } from "react";
import "./gameRules.css";
import logoBlue from "../../components/images/logoblue.png";
import { Link, useHistory } from "react-router-dom";
import { ArrowBack } from "@material-ui/icons";
import { getRules } from "../../services/game.services.js";

export default function GameRules(props) {
  const [ruleData, setRuleData] = useState(null);
  const [loading, setLoading] = useState(false);

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
    console.log("88", ruleData);
  }, [ruleData]);

  let history = useHistory();

  return (
    <div className="gameRules">
      <div className="gameRulesHeader">
        <div className="titleWithBack">
          <button className="backBtn" onClick={() => history.goBack()}>
            <ArrowBack className="backBtnIcon" />
          </button>
          <h1 className="gameRulesTitle">Game Rules</h1>
        </div>
        <img
          className="gameRulesLogo"
          src={logoBlue}
          alt="logo"
          width="150px"
        ></img>
      </div>

      {ruleData?.map((item) => {
        return (
          <div className="rulesContainer">
            <h1 className="rulesTxt">{item?.ruleName}</h1>

            <div className="ageView">
              <p className="age">Gender: {item?.gender}</p>
              <div className="line" />
              <p className="age">Code: {item?.ruleId}</p>
            </div>

            <Link to={"/ruleDetails/" + item._id}>
              <button
                className="viewBtn"
                onPress={() => props.navigation.navigate("RuleDetail")}
              >
                VIEW DETAILS
              </button>
            </Link>
          </div>
        );
      })}

      <div className="gameRuleAdd">
        <Link to={"/addRule"}>
          <button
            onPress={() => props.navigation.navigate("AddRule")}
            className="plusBtn"
          >
            +
          </button>
        </Link>
      </div>
    </div>
  );
}
