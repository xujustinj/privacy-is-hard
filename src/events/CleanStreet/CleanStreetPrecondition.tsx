import { Button } from "../../components/Button";
import { BaseEventProps } from "../../model/Event";

export function CleanStreetPrecondition({ onNext }: BaseEventProps) {
  return (
    <>
      <p>
        A small earthquake has struck Jollywood! The city is mostly okay, except
        one old apartment building that collapsed, killing 50 people.
      </p>

      {onNext && <Button onClick={onNext}>Continue</Button>}
    </>
  );
}
