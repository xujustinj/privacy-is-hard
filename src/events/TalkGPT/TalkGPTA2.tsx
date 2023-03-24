import { useEffect } from "react";
import { BaseEventProps } from ".././BaseEvent";

export function TalkGPTA2({ finish }: BaseEventProps) {
  useEffect(finish, [finish]);

  return (
    <div>
      <p>
        Some genius prompt-engineered a model inversion attack against your
        chatbot. Now Reddit has screenshots of “you” revealing embarrassing
        things about you and your friends!
      </p>
      <p>Your friends are not impressed.</p>
    </div>
  );
}
