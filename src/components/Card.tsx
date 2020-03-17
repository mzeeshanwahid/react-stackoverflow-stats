import React from "react";
import { CardProps } from "../interfaces/api";

const Card: React.FC<CardProps> = data => {
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
          <div className="coords">
            <span>Group Name</span>
            <span>Joined January 2019</span>
          </div>
          <div className="coords">
            <span>Position/Role</span>
            <span>City, Country</span>
          </div>
          <div className="stats">
            <div>
              <div className="title">Awards</div>
              <i className="fa fa-trophy"></i>
              <div className="value">2</div>
            </div>
            <div>
              <div className="title">Matches</div>
              <i className="fa fa-gamepad"></i>
              <div className="value">27</div>
            </div>
            <div>
              <div className="title">Pals</div>
              <i className="fa fa-group"></i>
              <div className="value">123</div>
            </div>
            <div>
              <div className="title">Coffee</div>
              <i className="fa fa-coffee"></i>
              <div className="value infinity">∞</div>
            </div>
          </div>
        </div>
      </div>
      <div className="general">
        <h1>{data.display_name}</h1>
        {data.tags.map(tag => (
          <span>{tag}</span>
        ))}
        <span className="more">Mouse over the card for more info</span>
      </div>
    </div>
  );
};

export default Card;
