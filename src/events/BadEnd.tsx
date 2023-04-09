import { Button } from "../components/Button";
import { BaseEventProps } from "../model/Event";

export function BadEnd({ onNext }: BaseEventProps) {
  return (
    <>
      <p>
        Uh oh! Your privacy score dropped to 0. Your biggest fan stole your
        identity and scammed other fans pretending to be you - and now you've
        been cancelled. Better luck next time!
      </p>

      {onNext && <Button onClick={onNext}>Continue Anyway</Button>}
    </>
  );
}
