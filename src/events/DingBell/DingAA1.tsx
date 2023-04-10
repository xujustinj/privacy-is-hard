import { Button } from "../../components/Button";
import { BaseEventProps } from "../../model/Event";

export function DingAA1({ onNext }: BaseEventProps) {
  return (
    <>
      <p>
        Oh no, the stalker fan came back and stole your confidential movie
        script!
      </p>
      <p>
        Thankfully, your Ding video doorbell caught his face. The police were
        able to catch him on time before the movie script was exposed.
      </p>

      {onNext && <Button onClick={onNext}>Continue</Button>}
    </>
  );
}
