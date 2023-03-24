import { useEffect } from "react";
import { BaseEventProps } from ".././BaseEvent";

export function DingAA1({ finish }: BaseEventProps) {
  useEffect(finish, [finish]);

  return (
    <div>
      <p>
        Oh no, the stalker fan came back and stole your confidential movie script! Thankfully, your Ding video doorbell caught his face. The police were able to catch him on time before the movie script was exposed.
      </p>
    </div>
  );
}
