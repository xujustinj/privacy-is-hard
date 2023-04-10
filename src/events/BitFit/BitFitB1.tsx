import { Button } from "../../components/Button";
import { AddScore } from "../../components/Score";
import { BaseEventProps } from "../../model/Event";
import { ScoreCategory } from "../../model/Score";

export function BitFitB1({ onNext }: BaseEventProps) {
  return (
    <>
      <p>
        Word gets out about your "feud" with your personal trainer. Tabloids
        have already published an article:{" "}
        <i>11 Celebrities Who Need A Serious Attitude Adjustment</i>.
      </p>
      <p>You're #1.</p>
      <AddScore category={ScoreCategory.CAREER} amount={-10} />

      {onNext && <Button onClick={onNext}>Continue</Button>}
    </>
  );
}
