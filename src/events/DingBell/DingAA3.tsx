import { useCallback, useState } from "react";
import { AddScore, ScoreCategory } from "../../game/Score";
import { BaseEventProps } from ".././BaseEvent";

export function DingAA3({ finish }: BaseEventProps) {
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
        Due to an emergency in your community, the police has requested 3 days of Ding footage from the entire neighbourhood. Would you like to provide video footage to the police?
      </p>
      <button onClick={() => choose(true)} disabled={choice !== null}>
        Yes! It's an emergency after all.
      </button>
      <button onClick={() => choose(false)} disabled={choice !== null}>
        No thanks, Ding already knows too much about me.
      </button>
      {choice === true && (
        <p></p>
      )}
      {choice === false && <><p>Oh no! Ding stored your video on the cloud, and the police got your videos without your consent! They went straight to Ding's parent company Babazon and asked for the video recordings.</p></>}
      {choice !== null && (
        <>{choice && <AddScore category={ScoreCategory.CAREER} amount={5} />}</>
      )}
    </div>
  );
}
