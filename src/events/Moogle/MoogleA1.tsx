import { Button } from "../../components/Button";
import { AddScore } from "../../components/Score";
import { BaseEventProps } from "../../model/Event";
import { ScoreCategory } from "../../model/Score";

export function MoogleA1({ onNext }: BaseEventProps) {
  return (
    <>
      <p>
        Moogle Home wakes you up every morning and reminds you of your
        appointments while you brush your teeth. It feels like a load has been
        taken off your shoulders!
      </p>
      <AddScore category={ScoreCategory.HAPPINESS} amount={10} />

      {onNext && <Button onClick={onNext}>Continue</Button>}
    </>
  );
}
