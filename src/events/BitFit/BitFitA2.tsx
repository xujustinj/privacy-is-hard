import { Button } from "../../components/Button";
import { AddScore } from "../../components/Score";
import { BaseEventProps } from "../../model/Event";
import { ScoreCategory } from "../../model/Score";

export function BitFitA2({ onNext }: BaseEventProps) {
  return (
    <>
      <p>
        Your BitFit alerts you that it is detecting an unusual heartbeat. The
        doctor diagnoses you with heart arrhythmia.
      </p>
      <AddScore category={ScoreCategory.HEALTH} amount={-10} />

      {onNext && <Button onClick={onNext}>Continue</Button>}
    </>
  );
}
