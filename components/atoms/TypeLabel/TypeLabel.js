
import React from "react";
import { TypeWrapper } from "./style";

export const TypeLabel = ({ type }) => {
  return (
    <TypeWrapper color="#FFFFFF" background="#DE2332">
      {type || "Natural"}
    </TypeWrapper>
  );
};
