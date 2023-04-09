import React, { ReactNode } from "react";
import { Button, ButtonPanel } from "./Button";

export interface ChoicesProps<Choice extends React.Key> {
  choices: ReadonlyArray<{
    choice: Choice;
    child: ReactNode;
  }>;
  chosen: Choice | null;
  onChoose: (choice: Choice) => void;
}

export function Choices<Choice extends React.Key>({
  choices,
  chosen,
  onChoose,
}: ChoicesProps<Choice>) {
  return (
    <ButtonPanel>
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
    </ButtonPanel>
  );
}
