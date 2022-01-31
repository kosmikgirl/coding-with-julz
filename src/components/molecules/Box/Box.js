import React from "react";

export const Box = ({ data }) => {
  return (
    <div className="info_box">
      <img
        src={`${process.env.PUBLIC_URL}/assets/logos/${data.photo}`}
        className="logo-info"
        alt="logo"
      />
      <h2>{data.title}</h2>
      <h5>{data.subtitle}</h5>
      <h6>{data.toolstitle}:</h6>
      <ul>
        {data.tools.map((tool) => (
          <li>{tool}</li>
        ))}
      </ul>
      <p>{data.about}</p>
    </div>
  );
};
