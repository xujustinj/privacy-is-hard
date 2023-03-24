import { useCallback, useState } from "react";
import { BaseEventProps } from "../BaseEvent";

export function BitFit({ finish }: BaseEventProps) {
  const [choice, setChoice] = useState<boolean | null>(null);
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
        You are booked for a new film! To get ready for the role, your manager
        finds you a personal trainer for the gym. Your new personal trainer
        would like you to start wearing a BitFit watch to see your activity
        levels.
      </p>
      <button onClick={() => choose(true)} disabled={choice !== null}>
        Yeah, no problem!
      </button>
      <button onClick={() => choose(false)} disabled={choice !== null}>
        I would rather not.
      </button>
      {choice === true && <></>}
      {choice === false && (
        <>
          <p>
            Your personal trainer is unhappy. Now they have to re-do the entire
            training plan! Word gets out about your "feud" with your personal
            trainer. Tabloids have already published an article - '11
            Celebrities Who Need A Serious Attitude Adjustment' - and you're #1.
          </p>
        </>
      )}
      {choice !== null && <></>}
    </div>
  );
}
