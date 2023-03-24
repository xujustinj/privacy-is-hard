import { useEffect } from "react";
import { BaseEventProps } from ".././BaseEvent";

export function CleanStreetPrecondition({ finish }: BaseEventProps) {
  useEffect(finish, [finish]);

  return (
    <div>
      <p>
        Some people from your city recognize a grocery store that appears in the
        background of your video. Your fans now know which neighbourhood you
        live in!
      </p>
    </div>
  );
}
