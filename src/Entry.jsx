import React from "react";

function Entry(props) {
  return (
    <div class="card text-dark bg-info mb-5 ">
      <div class="card-header">
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {props.emoji}
        </span>
      </div>
      <div class="card-body">
        <h5 class="card-title">{props.name}</h5>
        <p class="card-text">{props.description}</p>
      </div>
    </div>
  );
}

export default Entry;
