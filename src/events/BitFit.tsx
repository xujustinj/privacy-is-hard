import { useCallback, useState } from "react";
import { AddScore, ScoreCategory } from "../game/Score";
import { BaseEventProps } from "./BaseEvent";

export function BitFit({ finish }: BaseEventProps) {
  const [choice, setChoice] = useState<boolean | null>(() => null);
  const choose = useCallback((newChoice: boolean) => {
    setChoice(newChoice);
    finish();
  }, [setChoice, finish]);
  return <div>
    <p>
      You are booked for a new film! To get ready for the role, your manager finds you a personal trainer for the gym. Your new personal trainer would like you to start wearing a BitFit watch to see your activity levels.
    </p>
    <button onClick={() => choose(true)} disabled={choice !== null}>
      Yeah, no problem!
    </button>
    <button onClick={() => choose(false)} disabled={choice !== null}>
      I would rather not.
    </button>
    {choice === true && <></>}
    {choice === false && <></>}
    {choice !== null && (
      <>
        <p>
          The doctor diagnoses you with heart arrhythmia and prescribes you some heart medication. You start taking your heart arrhythmia medicine.
        </p>
        <AddScore category={ScoreCategory.HEALTH} amount={5} />
      </>
    )}
  </div>
}
