import { Button } from "../../components/Button";
import { AddScore } from "../../components/Score";
import { BaseEventProps } from "../../model/Event";
import { ScoreCategory } from "../../model/Score";

export function BitFitA3({ onNext }: BaseEventProps) {
  return (
    <>
      <p>
        Not a problem! You share the BitFit data with your doctor and she
        confirms the diagnosis.
      </p>
      <p>
        Your doctor quickly prescribes you some heart medication. You start
        taking it and feel much better.
      </p>
      <AddScore category={ScoreCategory.HEALTH} amount={10} />

      {onNext && <Button onClick={onNext}>Continue</Button>}
    </>
  );
}
