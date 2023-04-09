import { Button } from "../../components/Button";
import { AddScore } from "../../components/Score";
import { BaseEventProps } from "../../model/Event";
import { ScoreCategory } from "../../model/Score";

export function CardiacB3({ onNext }: BaseEventProps) {
  return (
    <>
      <p>
        You ace an audition for an action movie, and are about to get the role
        when the casting director sees the article. You explain that your
        doctor's treatments are effective, but they request an additional
        physical assessment to be sure. You are understandably annoyed.
      </p>
      <AddScore category={ScoreCategory.HAPPINESS} amount={-5} />

      {onNext && <Button onClick={onNext}>Continue</Button>}
    </>
  );
}
