import React, { ReactNode } from "react";
import styled from "styled-components";
import { Button } from "./Button";

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

export function Choices<Choice extends React.Key>({
  choices,
  chosen,
  onChoose,
}: ChoicesProps<Choice>) {
  return (
    <ChoiceButtonsContainer>
      {choices.map(({ choice, child }) => (
        <Button
          key={choice}
          isSelected={choice === chosen}
          onClick={() => onChoose(choice)}
          disabled={chosen !== null}
        >
          {child}
        </Button>
      ))}
    </ChoiceButtonsContainer>
  );
}
