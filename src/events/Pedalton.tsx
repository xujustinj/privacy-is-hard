import { useCallback, useState } from "react";
import { AddScore, ScoreCategory } from "../game/Score";
import { BaseEventProps } from "./BaseEvent";

export const enum PedaltonChoice {
  YES,
  NO,
}

export function Pedalton({ finish }: BaseEventProps) {
  const [choice, setChoice] = useState<PedaltonChoice | null>(() => null);
  const choose = useCallback(
    (newChoice: PedaltonChoice) => {
      setChoice(newChoice);
      finish();
    },
    [setChoice, finish]
  );

  return (
    <div>
      <p>
        Holidays are over, time to get fit again for the movie. Your friend
        recommended you to try your new Pedalton bike. Let's give it a try!
      </p>
      <p>You start working out everyday for 1 hour in your home studio.</p>
      <AddScore category={ScoreCategory.HEALTH} amount={10} />
      <p>
        During a workout, one of your fans saw your name on the Peloton
        leaderboard and sent you a virtual high five. Would you like to high
        five them back?
      </p>
      <button onClick={() => choose(PedaltonChoice.YES)} disabled={choice !== null}>
        Yeah!
      </button>
      <button onClick={() => choose(PedaltonChoice.NO)} disabled={choice !== null}>
        No.
      </button>
      {choice === PedaltonChoice.YES && (
        <>
          <p>You have made a new friend!</p>
          <AddScore category={ScoreCategory.SOCIAL} amount={5} />
        </>
      )}
      {choice === PedaltonChoice.NO && (
        <>
          <p>Ok.</p>
        </>
      )}
    </div>
  );
}
