
import React from "react";
import { TypeWrapper } from "./style";

export const TypeLabel = ({ type }) => {
  return (
    <TypeWrapper color="#FFFFFF" background="rgb(255, 255, 255, 0.5)">
      <p>{type || "Natural"}</p>
    </TypeWrapper>
  );
};
