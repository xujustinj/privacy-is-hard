import { useCallback, useState } from "react";
import { AddScore, ScoreCategory } from "../../game/Score";
import { BaseEventProps } from ".././BaseEvent";

export function TwentyTwoandMe({ finish }: BaseEventProps) {
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
        It’s Christmas! You are hosting a party with your friends and family.
        For some holiday fun, your aunt Barbara has gifted 22andMe DNA testing kits to the entire family.
      </p>
      <button onClick={() => choose(true)} disabled={choice !== null}>
        I'll pass, thanks.
      </button>
      <button onClick={() => choose(false)} disabled={choice !== null}>
        Yeah, why not! I'll join in the fun too!
      </button>
      {choice === true && <><p>Your aunt Barbara is offended. Why are you ruining the holiday spirit? The rest of the family will be taking it anyway.</p>
      <p>Your family has some Irish DNA, cool!</p></>}
      {choice === false && <><p>Your family has some Irish DNA, cool!</p></>}
      {choice !== null && (
        <>
        </>
      )}
    </div>
  );
}
