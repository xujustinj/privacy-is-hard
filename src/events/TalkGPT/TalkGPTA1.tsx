import { Button } from "../../components/Button";
import { AddScore, ScoreCategory } from "../../components/Score";
import { BaseEventProps } from "../../model/Event";

export function TalkGPTA1({ onNext }: BaseEventProps) {
  return (
    <>
      <p>The app is a huge hit. Your fans love it!</p>
      <AddScore category={ScoreCategory.CAREER} amount={5} />

      {onNext && <Button onClick={onNext}>Continue</Button>}
    </>
  );
}
