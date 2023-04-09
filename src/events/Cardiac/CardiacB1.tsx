import { Button } from "../../components/Button";
import { InfoProvider } from "../../components/InfoPanel";
import { AddScore, ScoreCategory } from "../../components/Score";
import { CardiacInfo } from "../../info/CardiacInfo";
import { BaseEventProps } from "../../model/Event";

export function CardiacB1({ onNext }: BaseEventProps) {
  return (
    <>
      <InfoProvider info={{ Component: CardiacInfo }}>
        <p>
          Scandal! Cardiac admits to using third-party trackers on its website.
          Cardiac has been selling the name, date of birth, gender, contact
          information, and health conditions of millions of Cardiac users
          (including you) for years!
        </p>
        <AddScore category={ScoreCategory.PRIVACY} amount={-20} />
      </InfoProvider>

      {onNext && <Button onClick={onNext}>Continue</Button>}
    </>
  );
}
