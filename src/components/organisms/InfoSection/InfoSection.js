import React from "react";
import { Box } from "../../molecules/Box/Box";
import "./InfoSection.scss";

export const InfoSection = ({ infoData }) => {
  return (
    <section className="info_container">
      {infoData.map((item) => {
        return <Box data={item} />;
      })}
    </section>
  );
};
