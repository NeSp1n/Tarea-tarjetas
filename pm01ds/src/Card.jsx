import React from "react";
import Avatar from "./Avatar";
import Details from "./Details";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.namecontact}</h2>
        <Avatar image={props.image} />
      </div>
      <Details tel={props.tel} email={props.email} />
    </div>
  );
}

export default Card;
