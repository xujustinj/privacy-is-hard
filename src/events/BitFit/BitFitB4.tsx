import { Button } from "../../components/Button";
import { AddScore } from "../../components/Score";
import { BaseEventProps } from "../../model/Event";
import { ScoreCategory } from "../../model/Score";

export function BitFitB4({ onNext }: BaseEventProps) {
  return (
    <>
      <p>Your doctor orders some tests, which take a while.</p>
      <p>
        Eventually, you get prescribed some heart medication. You start taking
        it and feel much better.
      </p>
      <AddScore category={ScoreCategory.HEALTH} amount={5} />

      {onNext && <Button onClick={onNext}>Continue</Button>}
    </>
  );
}
