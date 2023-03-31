import { useEffect } from "react";
import { BaseEventProps } from "./BaseEvent";

export function BadEnd({ finish }: BaseEventProps) {
  useEffect(finish, [finish]);

  return (
    <div>
      <p>Uh oh! Your privacy score dropped to 0. Your biggest fan stole your identity and scammed other fans pretending to be you - and now you've been cancelled. Better luck next time!</p>
    </div>
  );
}
