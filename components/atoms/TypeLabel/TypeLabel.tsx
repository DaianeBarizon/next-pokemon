
import React from "react";
import { TypeWrapper } from "./style";
import { dangerColor, successColor, blueColor, grayColor, whiteColor, yellowColor } from '../../../helpers/colors';

interface ITypeLabelProps {
  type?: string;
}

const handleColorDefinition = (colorName: string) => {
  switch (colorName) {
    case 'grass':
      return {background: successColor, color: whiteColor}
    case 'poison':
      return {background: blueColor, color: whiteColor}
    case 'fire':
      return {background: dangerColor, color: whiteColor}
    case 'flying':
      return {background: yellowColor, color: whiteColor}
    default:
      return {background: grayColor, color: whiteColor}
  }
}

export const TypeLabel: React.FC<ITypeLabelProps> = ({ type }) => {

  return (
    <TypeWrapper {...handleColorDefinition(type)}>
      <p>{type || "Natural"}</p>
    </TypeWrapper>
  );
};
