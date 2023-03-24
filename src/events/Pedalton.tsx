import { useCallback, useState } from "react";
import { AddScore, ScoreCategory } from "../game/Score";
import { BaseEventProps } from "./BaseEvent";

export function Pedalton({ finish }: BaseEventProps) {
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
      Holidays are over, time to get fit again for the movie. Your friend recommended you to try your new Pedalton bike. Let's give it a try!
      </p>
      <p>
      You start working out everyday for 1 hour in your home studio.
      </p>
      <p>
      During a workout, one of your fans saw your name on the Peloton leaderboard and sent you a virtual high five. Would you like to high five them back?
      </p>
      <button onClick={() => choose(true)} disabled={choice !== null}>
        Yeah!
      </button>
      <button onClick={() => choose(false)} disabled={choice !== null}>
        No.
      </button>
      {choice === true && <><p>You have made a new friend!</p>
      </>}
      {choice === false && <><p>Ok.</p></>}
      {choice !== null && (
        <>
        </>
      )}
    </div>
  );
}
