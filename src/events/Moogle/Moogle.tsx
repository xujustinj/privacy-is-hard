import { useCallback, useState } from "react";
import { AddScore, ScoreCategory } from "../../game/Score";
import { BaseEventProps } from "../BaseEvent";

export function Moogle({ finish }: BaseEventProps) {
  const [choice, setChoice] = useState<boolean | null>(() => null);
  const choose = useCallback(
    (newChoice: boolean) => {
      setChoice(newChoice);
      finish();
    },
    [setChoice, finish]
  );
  return (
    <div>
      <p>
      There's just so much to do everyday! Auditions, rehearsals, acting classes, voice lessons, performing, networking, gym, groceries, friends, family... Did I say gym yet?
      Your manager suggested you to start using Moogle Calendar and get a matching Moogle Home voice assistant too. He says it'll make it easier to keep track of these things.
      </p>
      <button onClick={() => choose(true)} disabled={choice !== null}>
        Yeah, it's time to get my life together.
      </button>
      <button onClick={() => choose(false)} disabled={choice !== null}>
        It's ok, I'll keep doing what I'm already doing.
      </button>
      {choice === true && <><p>You buy a Moogle Home and add everything on your to-do list to Moogle Calendar.</p></>}
      {choice === false && <></>}
      {choice !== null && (
        <>
        </>
      )}
    </div>
  );
}
