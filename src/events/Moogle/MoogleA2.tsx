import { Button } from "../../components/Button";
import { InfoProvider } from "../../components/InfoPanel";
import { AddScore } from "../../components/Score";
import { MoogleA2Info } from "../../info/MoogleA2Info";
import { BaseEventProps } from "../../model/Event";
import { ScoreCategory } from "../../model/Score";

export function MoogleA2({ onNext }: BaseEventProps) {
  return (
    <>
      <InfoProvider info={{ Component: MoogleA2Info }}>
        <p>
          Today, you have a table read for your upcoming movie. One of the cast
          members reads out loud this line in the script: "Hey Moogle, what's my
          schedule?".
        </p>
        <p>
          It triggers the voice assistant on your phone! Before you can stop it,
          it says out loud "Buy hemorrhoids cream at 5pm". The crew laughs and
          you're a bit embarrassed.
        </p>
        <AddScore category={ScoreCategory.PRIVACY} amount={-5} />
        <AddScore category={ScoreCategory.HAPPINESS} amount={-5} />
      </InfoProvider>

      {onNext && <Button onClick={onNext}>Continue</Button>}
    </>
  );
}
