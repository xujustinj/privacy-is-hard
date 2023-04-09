import { Button } from "../../components/Button";
import { AddScore, ScoreCategory } from "../../components/Score";
import { BaseEventProps } from "../../model/Event";

export function DingB1({ onNext }: BaseEventProps) {
  return (
    <>
      <p>
        Your bodyguard was enjoying his sandwich when the stalker fan came back
        and stole the movie script.
      </p>
      <p>
        You alert the police, but no cameras caught his face, so the police was
        not able to find them. The stalker fan released the movie script. Yikes!
      </p>
      <AddScore category={ScoreCategory.CAREER} amount={-20} />

      {onNext && <Button onClick={onNext}>Continue</Button>}
    </>
  );
}
