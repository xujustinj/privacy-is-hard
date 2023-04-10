import { Button } from "../../components/Button";
import { InfoProvider } from "../../components/InfoPanel";
import { BitFitInfo } from "../../info/BitFitInfo";
import { BaseEventProps } from "../../model/Event";

export function BitFitB2({ onNext }: BaseEventProps) {
  return (
    <>
      <InfoProvider info={{ Component: BitFitInfo }}>
        <p>BitFit experienced a data breach!</p>
      </InfoProvider>
      <p>
        You show the news to your trainer with some vindication, but the damage
        to your reputation has already been done.
      </p>

      {onNext && <Button onClick={onNext}>Continue</Button>}
    </>
  );
}
