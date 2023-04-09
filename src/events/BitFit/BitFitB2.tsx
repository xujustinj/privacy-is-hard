import { Button } from "../../components/Button";
import { AddScore } from "../../components/Score";
import { BaseEventProps } from "../../model/Event";
import { ScoreCategory } from "../../model/Score";

export function BitFitB2({ onNext }: BaseEventProps) {
  return (
    <>
      <p>
        The doctor orders some tests, which take a while, but you eventually get
        prescribed some heart medication. You start taking it and feel much
        better.
      </p>
      <AddScore category={ScoreCategory.HEALTH} amount={5} />

      {onNext && <Button onClick={onNext}>Continue</Button>}
    </>
  );
}
