import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export default function FeaturedInfo() {
  return (
    <div>
      <div className="featured">
        <div className="featuredItem">
          <div className="featuredTitle">
            <span>Number of Users</span>
          </div>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">3</span>
          </div>
        </div>
        <div className="featuredItem">
          <div className="featuredTitle">
            <span>Number of Teams</span>
          </div>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">6</span>
          </div>
        </div>
      </div>
      <div className="featured2">
        <div className="featuredItemBig">
          <div>
            <div className="featuredTitle">
              <span>Total Number of Games</span>
            </div>
          </div>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">28</span>
          </div>
        </div>
      </div>
    </div>
  );
}
