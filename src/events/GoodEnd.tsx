import { useEffect } from "react";
import { BaseEventProps } from "./BaseEvent";

export function GoodEnd({ finish }: BaseEventProps) {
  useEffect(finish, [finish]);

  return (
    <div>
      <p>Good job! You've mastered the art of private celebrity life.</p>
    </div>
  );
}
