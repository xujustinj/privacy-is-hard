import { Button } from "../../components/Button";
import { AddScore, ScoreCategory } from "../../components/Score";
import { BaseEventProps } from "../../model/Event";

export function CardiacB2({ onNext }: BaseEventProps) {
  return (
    <>
      <p>
        An unscrupulous Jollywood reporter sifts through the data obtained by an
        ad agency from Cardiac. Finding you among the data, the reporter writes
        a tabloid piece on your heart issues, speculating about your health.
      </p>
      <AddScore category={ScoreCategory.CAREER} amount={-10} />

      {onNext && <Button onClick={onNext}>Continue</Button>}
    </>
  );
}
