import React from "react";
import "./Featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={90} text="90%" strokeWidth={5} />
        </div>
        <p className="title"> Total Sales Made Today</p>
        <p className="amount">$720</p>
        <p className="desc">Woahh!! You Are Achieving Your Targets</p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>{" "}
            <div className="itemResult negative">
              <KeyboardArrowDownIcon fontSize="small" />
              <div className="resultAmount">$25.8k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Week</div>{" "}
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Month</div>{" "}
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div className="resultAmount">$20.4k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
