import { Button } from "../../components/Button";
import { AddScore } from "../../components/Score";
import { BaseEventProps } from "../../model/Event";
import { ScoreCategory } from "../../model/Score";

export function BitFitB1({ onNext }: BaseEventProps) {
  return (
    <>
      <p>
        You experience shortness of breath and feel dizzy at the gym. You faint.
        The doctor diagnoses you with heart arrhythmia.
      </p>
      <AddScore category={ScoreCategory.HEALTH} amount={-10} />

      {onNext && <Button onClick={onNext}>Continue</Button>}
    </>
  );
}
