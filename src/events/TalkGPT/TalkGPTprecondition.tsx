import { Button } from "../../components/Button";
import { BaseEventProps } from "../../model/Event";

export function TalkGPTprecondition({ onNext }: BaseEventProps) {
  return (
    <>
      <p>
        On your daily Americano run at Moonbucks, you run into a fan who
        recognizes you, and you have a lovely conversation.
      </p>
      <p>You wish that you could connect with more fans at the same time...</p>

      {onNext && <Button onClick={onNext}>Continue</Button>}
    </>
  );
}
