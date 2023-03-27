import { useEffect } from "react";
import { BaseEventProps } from ".././BaseEvent";
import { AddScore, ScoreCategory } from "../../game/Score";

export function MoogleA1({ finish }: BaseEventProps) {
  useEffect(finish, [finish]);

  return (
    <div>
      <p>
        Moogle Home wakes you up every morning and reminds you of your
        appointments while you brush your teeth. It feels like a load has been
        taken off your shoulders!
      </p>
      <AddScore category={ScoreCategory.HAPPINESS} amount={10} />
    </div>
  );
}
