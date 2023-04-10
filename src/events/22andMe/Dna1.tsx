import { Button } from "../../components/Button";
import { BaseEventProps } from "../../model/Event";

export function TwentyTwoandMe1({ onNext }: BaseEventProps) {
  return (
    <>
      <p>
        Your 22andMe results are back. Your family has some Irish DNA, cool!
      </p>

      {onNext && <Button onClick={onNext}>Continue</Button>}
    </>
  );
}
