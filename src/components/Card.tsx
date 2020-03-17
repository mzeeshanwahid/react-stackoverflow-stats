import React from "react";
import { CardProps } from "../interfaces/api";
import Tags from "./Tags";

const Card: React.FC<CardProps> = data => {
  console.log("Data ...", data);
  return (
    <div className="card">
      <div className="additional">
        <div className="user-card">
          {/* <div className="level center">Level 13</div> */}
          <img src={data.profile_image} />
          <div className="points center">{data.reputation}</div>
        </div>
        <div className="more-info">
          <h1>{data.display_name}</h1>
          {/* <div className="coords">
            <span>Group Name</span>
            <span>Joined January 2019</span>
          </div> */}
          <div className="coords">
            <span>{data.location}</span>
            <span>{data.link}</span>
          </div>
          <div className="stats">
            <div>
              <div className="title">Today</div>
              <i className="fa fa-trophy"></i>
              <div className="value">{data.reputation_change_day}</div>
            </div>
            <div>
              <div className="title">Month</div>
              <i className="fa fa-gamepad"></i>
              <div className="value">{data.reputation_change_month}</div>
            </div>
            <div>
              <div className="title">Quarter</div>
              <i className="fa fa-group"></i>
              <div className="value">{data.reputation_change_quarter}</div>
            </div>
            <div>
              <div className="title">Year</div>
              <i className="fa fa-coffee"></i>
              <div className="value">{data.reputation_change_year}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="general">
        <h1>{data.display_name}</h1>
        {data.tags.map(tag => (<span className="tag">{tag}</span>))}
        <span className="more">Mouse over the card for more info</span>
      </div>
    </div>
  );
};

export default Card;
