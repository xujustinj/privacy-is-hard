import { useEffect } from "react";
import { BaseEventProps } from ".././BaseEvent";

export function TalkGPTA1({ finish }: BaseEventProps) {
  useEffect(finish, [finish]);

  return (
    <div>
      <p>The app is a huge hit. Your fans love it!</p>
    </div>
  );
}
