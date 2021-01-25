
import React from "react";
import { TypeWrapper } from "./style";

interface ITypeLabelProps {
  type?: string;
}

export const TypeLabel: React.FC<ITypeLabelProps> = ({ type }) => {

  return (
    <TypeWrapper color="#FFFFFF" background="rgb(255, 255, 255, 0.5)">
      <p>{type || "Natural"}</p>
    </TypeWrapper>
  );
};
