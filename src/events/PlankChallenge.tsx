import { useCallback, useState } from "react";
import { AddScore, ScoreCategory } from "../game/Score";
import { BaseEventProps } from "./BaseEvent";

export function PlankChallenge({ finish }: BaseEventProps) {
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
      Trend of the month: the plank challenge is taking over the pages of YouSnapstatok's influencers! In the trend, an influencer reads out the names of random followers while holding a plank for as long as they can.
      </p>
      <button onClick={() => choose(true)} disabled={choice !== null}>
        Do the plank!
      </button>
      <button onClick={() => choose(false)} disabled={choice !== null}>
        Naw, I'll pass.
      </button>
      {choice === true && <><p>
          Your plank goes on for 5 minutes! Your fans compliment your amazing physical fitness.
          </p></>}
      {choice === false && <></>}
      {choice !== null && (
        <></>
      )}
    </div>
  );
}
