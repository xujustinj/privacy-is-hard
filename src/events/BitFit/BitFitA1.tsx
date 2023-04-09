import { Button } from "../../components/Button";
import { InfoProvider } from "../../components/InfoPanel";
import { AddScore, ScoreCategory } from "../../components/Score";
import { BitFitInfo } from "../../info/BitFitInfo";
import { BaseEventProps } from "../../model/Event";

export function BitFitA1({ onNext }: BaseEventProps) {
  return (
    <>
      <InfoProvider info={{ Component: BitFitInfo }}>
        <p>
          Uh oh! BitFit experienced a data breach. Your GPS location was part of
          that data breach, and the paparazzi now know in which gym you train.
        </p>
        <AddScore category={ScoreCategory.PRIVACY} amount={-10} />
      </InfoProvider>

      {onNext && <Button onClick={onNext}>Continue</Button>}
    </>
  );
}
