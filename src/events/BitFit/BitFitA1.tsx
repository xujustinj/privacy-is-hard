import { Button } from "../../components/Button";
import { InfoProvider } from "../../components/InfoPanel";
import { AddScore } from "../../components/Score";
import { BitFitInfo } from "../../info/BitFitInfo";
import { BaseEventProps } from "../../model/Event";
import { ScoreCategory } from "../../model/Score";

export function BitFitA1({ onNext }: BaseEventProps) {
  return (
    <>
      <InfoProvider info={{ Component: BitFitInfo }}>
        <p>
          Uh oh, BitFit experienced a data breach! Your GPS location was part of
          that breach, and the paparazzi now know which gym you train in.
        </p>
        <AddScore category={ScoreCategory.PRIVACY} amount={-10} />
      </InfoProvider>

      {onNext && <Button onClick={onNext}>Continue</Button>}
    </>
  );
}
