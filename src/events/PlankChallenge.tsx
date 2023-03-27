import { useCallback, useState } from "react";
import { BaseEventProps } from "./BaseEvent";
import { AddScore, ScoreCategory } from "../game/Score"

export const enum PlankChoice {
  YES,
  NO,
}

export function PlankChallenge({ finish }: BaseEventProps) {
  const [choice, setChoice] = useState<PlankChoice | null>(() => null);
  const choose = useCallback(
    (newChoice: PlankChoice) => {
      setChoice(newChoice);
      finish();
    },
    [setChoice, finish]
  );

  return (
    <div>
      <p>
        Trend of the month: the plank challenge is taking over the pages of
        YouSnapstatok's influencers! In the trend, an influencer reads out the
        names of random followers while holding a plank for as long as they can.
      </p>
      <button onClick={() => choose(PlankChoice.YES)} disabled={choice !== null}>
        Do the plank!
      </button>
      <button onClick={() => choose(PlankChoice.NO)} disabled={choice !== null}>
        Naw, I'll pass.
      </button>
      {choice === PlankChoice.YES && (
        <>
          <p>
            Your plank goes on for 5 minutes! Your fans compliment your amazing
            physical fitness.
          </p>
          <AddScore category={ScoreCategory.CAREER} amount={5} />
          <AddScore category={ScoreCategory.HAPPINESS} amount={5} />
        </>
      )}
    </div>
  );
}
