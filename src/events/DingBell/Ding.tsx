import { useCallback, useContext, useState } from "react";
import { Choices } from "../../game/Choices";
import { GeneratorStateContext } from "../../game/Generator";
import { BaseEventProps } from "../BaseEvent";

export const enum SafetyChoice {
  CAMERA,
  BODYGUARD,
}

export function Ding({ finish }: BaseEventProps) {
  const state = useContext(GeneratorStateContext);
  const [choice, setChoice] = useState<SafetyChoice | null>(null);
  const choose = useCallback(
    (choice: SafetyChoice) => {
      state.safetyChoice = choice;
      setChoice(choice);
      finish();
    },
    [state, setChoice, finish]
  );
  return (
    <div>
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
    </div>
  );
}
