import styled from "styled-components";
import { Colors, rgb } from "../util/colors";

export const Button = styled.button<{ isSelected?: boolean }>`
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  color: black;
  width: 100%;
  font-family: Courier;
  font-weight: bold;
  font-size: 14pt;

  &:enabled {
    background-color: ${rgb(Colors.sunset)};
    &:hover {
      background-color: ${rgb(Colors.princetonOrange)};
    }
  }

  &:disabled {
    background-color: ${(props) =>
      props.isSelected ? rgb(Colors.princetonOrange) : "grey"};
  }
`;
