import { Button } from "../../components/Button";
import { AddScore } from "../../components/Score";
import { BaseEventProps } from "../../model/Event";
import { ScoreCategory } from "../../model/Score";

export function MoogleB1({ onNext }: BaseEventProps) {
  return (
    <>
      <p>
        Ugh, you totally forgot there was a family dinner last night! And you're
        still stressed from a million other things on your plate.
      </p>
      <AddScore category={ScoreCategory.HAPPINESS} amount={-10} />
      <AddScore category={ScoreCategory.SOCIAL} amount={-10} />

      {onNext && <Button onClick={onNext}>Continue</Button>}
    </>
  );
}
