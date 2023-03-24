import { useEffect } from "react";
import { AddScore, ScoreCategory } from "../../game/Score";
import { BaseEventProps } from ".././BaseEvent";

export function BitFitB2({ finish }: BaseEventProps) {
  useEffect(finish, [finish]);

  return (
    <div>
      <p>
        The doctor orders some tests, which take a while, but you eventually get
        prescribed some heart medication. You start taking it and feel much
        better.
      </p>
      <AddScore category={ScoreCategory.HEALTH} amount={5} />
    </div>
  );
}
