import React, { ReactNode } from "react";
import styled from "styled-components";
import { Colors, rgb } from "../util/colors";

export interface ChoicesProps<Choice extends React.Key> {
  choices: ReadonlyArray<{
    choice: Choice;
    child: ReactNode;
  }>;
  chosen: Choice | null;
  onChoose: (choice: Choice) => void;
}

const ChoiceButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  align-items: stretch;
  column-gap: 16px;
  width: 100%;
`;

const ChoiceButton = styled.button<{ isSelected: boolean }>`
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

export function Choices<Choice extends React.Key>({
  choices,
  chosen,
  onChoose,
}: ChoicesProps<Choice>) {
  return (
    <ChoiceButtonsContainer>
      {choices.map(({ choice, child }) => (
        <ChoiceButton
          key={choice}
          isSelected={choice === chosen}
          onClick={() => onChoose(choice)}
          disabled={chosen !== null}
        >
          {child}
        </ChoiceButton>
      ))}
    </ChoiceButtonsContainer>
  );
}
