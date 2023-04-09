import { useCallback, useContext, useState } from "react";
import { Button } from "../../components/Button";
import { Choices } from "../../components/Choices";
import { GeneratorStateContext } from "../../components/Generator";
import { BaseEventProps } from "../../model/Event";

export const enum SafetyChoice {
  CAMERA,
  BODYGUARD,
}

export function Ding({ onNext }: BaseEventProps) {
  const state = useContext(GeneratorStateContext);
  const [choice, setChoice] = useState<SafetyChoice | null>(null);
  const choose = useCallback(
    (choice: SafetyChoice) => {
      state.safetyChoice = choice;
      setChoice(choice);
    },
    [state, setChoice]
  );
  return (
    <>
      <p>
        Uh oh... Your house was almost broken into by a stalker fan. Luckily,
        your bodyguard stopped him right on time. Would you like to install a
        Ding video doorbell for security?
      </p>
      <Choices
        choices={[
          {
            choice: SafetyChoice.CAMERA,
            child: "Install it. Better safe than sorry!",
          },
          {
            choice: SafetyChoice.BODYGUARD,
            child: "No, my bodyguard is the best!",
          },
        ]}
        chosen={choice}
        onChoose={choose}
      />

      {choice !== null && onNext && <Button onClick={onNext}>Continue</Button>}
    </>
  );
}
