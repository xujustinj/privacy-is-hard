import { useCallback, useState } from "react";
import { Choices } from "../game/Choices";
import { AddScore, ScoreCategory } from "../game/Score";
import { BaseEventProps } from "./BaseEvent";

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
      <Choices
        choices={[
          {
            choice: PlankChoice.YES,
            child: "Do the plank!",
          },
          {
            choice: PlankChoice.NO,
            child: "Naw, I'll pass",
          },
        ]}
        chosen={choice}
        onChoose={choose}
      />
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
