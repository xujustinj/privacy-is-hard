import React, { ReactNode } from "react";
import styled from "styled-components";

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
  border-radius: 3px;
  padding: 8px 16px;
  color: black;
  width: auto;
  flex-grow: 1;
  font-size: 14pt;

  &:enabled {
    background-color: rgb(254, 200, 126);
    &:hover {
      background-color: rgb(254, 157, 50);
    }
  }

  &:disabled {
    background-color: ${(props) =>
      props.isSelected ? "rgb(254, 157, 50)" : "grey"};
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
