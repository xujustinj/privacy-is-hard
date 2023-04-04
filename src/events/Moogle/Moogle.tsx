import { useCallback, useContext, useState } from "react";
import { Choices } from "../../game/Choices";
import { GeneratorStateContext } from "../../game/Generator";
import { BaseEventProps } from "../BaseEvent";

export const enum MoogleChoice {
  YES,
  NO,
}

export function Moogle({ finish }: BaseEventProps) {
  const state = useContext(GeneratorStateContext);
  const [choice, setChoice] = useState<MoogleChoice | null>(null);
  const choose = useCallback(
    (choice: MoogleChoice) => {
      state.moogleChoice = choice;
      setChoice(choice);
      finish();
    },
    [state, setChoice, finish]
  );
  return (
    <div>
      <p>
        There's just so much to do everyday! Auditions, rehearsals, acting
        classes, voice lessons, performing, networking, gym, groceries, friends,
        family... Did I say gym yet? Your manager suggested you to start using
        Moogle Calendar and get a matching Moogle Home voice assistant too. He
        says it'll make it easier to keep track of these things.
      </p>
      <Choices
        choices={[
          {
            choice: MoogleChoice.YES,
            child: "Yeah, it's time to get my life together.",
          },
          {
            choice: MoogleChoice.NO,
            child: "It's ok, I'll keep doing what I'm already doing.",
          },
        ]}
        chosen={choice}
        onChoose={choose}
      />
      {choice === MoogleChoice.YES && (
        <>
          <p>
            You buy a Moogle Home and add everything on your to-do list to
            Moogle Calendar.
          </p>
        </>
      )}
    </div>
  );
}
