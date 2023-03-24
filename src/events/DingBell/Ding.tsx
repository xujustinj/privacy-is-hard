import { useCallback, useState } from "react";
import { AddScore, ScoreCategory } from "../../game/Score";
import { BaseEventProps } from ".././BaseEvent";

export function Ding({ finish }: BaseEventProps) {
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
        Uh oh... Your house was almost broken into by a stalker fan. Luckily, your bodyguard stopped him right on time. Would you like to install a Ding video doorbell for security?
      </p>
      <button onClick={() => choose(true)} disabled={choice !== null}>
        Install it. Better safe than sorry!
      </button>
      <button onClick={() => choose(false)} disabled={choice !== null}>
        No, my bodyguard is the best!
      </button>
      {choice === true && (
        <p>You order a Ding video doorbell. When you go to set it up, it has you install an app. Do you agree to the Terms and Conditions? https://ring.com/ca/en/terms</p>
        
      )}
      {choice === false && <></>}
      {choice !== null && (
        <>{choice && <AddScore category={ScoreCategory.CAREER} amount={5} />}</>
      )}
    </div>
  );
}
