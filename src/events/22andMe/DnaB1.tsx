import { Button } from "../../components/Button";
import { InfoProvider } from "../../components/InfoPanel";
import { AddScore } from "../../components/Score";
import { DnaInfo } from "../../info/DnaInfo";
import { BaseEventProps } from "../../model/Event";
import { ScoreCategory } from "../../model/Score";

export function TwentyTwoandMeB1({ onNext }: BaseEventProps) {
  return (
    <>
      <InfoProvider info={{ Component: DnaInfo }}>
        <p>
          22andMe goes bankrupt. They have to sell all their data as part of the
          process to pay back creditors, including you and your family's DNA
          data, which makes it easy to identify you in the future.
        </p>
        <AddScore category={ScoreCategory.PRIVACY} amount={-20} />
      </InfoProvider>

      {onNext && <Button onClick={onNext}>Continue</Button>}
    </>
  );
}
