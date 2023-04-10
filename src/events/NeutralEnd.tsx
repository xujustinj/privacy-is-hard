import { Button } from "../components/Button";
import { BaseEventProps } from "../model/Event";

export function NeutralEnd({ onReset }: BaseEventProps) {
  return (
    <>
      <p>
        You made it to the end of the game! Unfortunately, you still lost too
        many privacy points. Would you like to try again?
      </p>

      <Button onClick={onReset}>Play Again</Button>
    </>
  );
}
