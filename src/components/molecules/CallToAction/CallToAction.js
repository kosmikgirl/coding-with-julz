import React from "react";
import "./CallToAction.scss";

export const CallToAction = () => {
  return (
    <div className="call-action-container">
      <div className="box-call">
        <h4>Start your dream project</h4>
        <p>
          Interested in working together? You can contact me and we can make
          amazing things happen!
        </p>
        <a href="mailto:hello@codingwithjulz.com">
          <button>Let's go for a coffee!</button>
        </a>
      </div>
    </div>
  );
};
