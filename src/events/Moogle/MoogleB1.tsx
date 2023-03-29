import { useEffect } from "react";
import { AddScore, ScoreCategory } from "../../game/Score";
import { BaseEventProps } from "../BaseEvent";

export function MoogleB1({ finish }: BaseEventProps) {
  useEffect(finish, [finish]);

  return (
    <div>
      <p>
        Ugh, you totally forgot there was a family dinner last night! And you're
        still stressed from a million other things on your plate.
      </p>
      <AddScore category={ScoreCategory.HAPPINESS} amount={-10} />
      <AddScore category={ScoreCategory.SOCIAL} amount={-10} />
    </div>
  );
}
