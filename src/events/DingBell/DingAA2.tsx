import { useEffect } from "react";
import { BaseEventProps } from ".././BaseEvent";
import { AddScore, ScoreCategory } from "../../game/Score";

export function DingAA2({ finish }: BaseEventProps) {
  useEffect(finish, [finish]);

  return (
    <div>
      <p>
        To your surprise, Babazon used a video of you on your front porch in a new Ding adversitement on InstaTok. What?
      </p>
      <AddScore category={ScoreCategory.PRIVACY} amount={-10} />
    </div>
  );
}
