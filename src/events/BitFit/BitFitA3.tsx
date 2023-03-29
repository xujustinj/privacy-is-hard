import { useEffect } from "react";
import { AddScore, ScoreCategory } from "../../game/Score";
import { BaseEventProps } from "../BaseEvent";

export function BitFitA3({ finish }: BaseEventProps) {
  useEffect(finish, [finish]);

  return (
    <div>
      <p>
        Not a problem! You share the BitFit data with your doctor and they are
        able to quickly prescribe you some heart medication. You start taking it
        and feel much better.
      </p>
      <AddScore category={ScoreCategory.HEALTH} amount={10} />
    </div>
  );
}
