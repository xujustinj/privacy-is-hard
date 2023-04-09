import { Button } from "../../components/Button";
import { AddScore, ScoreCategory } from "../../components/Score";
import { BaseEventProps } from "../../model/Event";

export function BitFitA3({ onNext }: BaseEventProps) {
  return (
    <>
      <p>
        Not a problem! You share the BitFit data with your doctor and they are
        able to quickly prescribe you some heart medication. You start taking it
        and feel much better.
      </p>
      <AddScore category={ScoreCategory.HEALTH} amount={10} />

      {onNext && <Button onClick={onNext}>Continue</Button>}
    </>
  );
}
