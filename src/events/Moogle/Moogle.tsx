import { useCallback, useContext, useState } from "react";
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
      <button onClick={() => choose(MoogleChoice.YES)} disabled={choice !== null}>
        Yeah, it's time to get my life together.
      </button>
      <button onClick={() => choose(MoogleChoice.NO)} disabled={choice !== null}>
        It's ok, I'll keep doing what I'm already doing.
      </button>
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
