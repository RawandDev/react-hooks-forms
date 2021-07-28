import React from "react";

function DisplayData(props) {
  return (
    <div>
      <h1>{props.firstName}</h1>
      <h1>{props.lastName}</h1>
      <h1>{props.agree ? "Agreed" : "Not Agree"}</h1>
    </div>
  );
}

export default DisplayData; 