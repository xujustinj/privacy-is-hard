import { useEffect } from "react";
import { AddScore, ScoreCategory } from "../../game/Score";
import { BaseEventProps } from ".././BaseEvent";

export function TwentyTwoandMeB1({ finish }: BaseEventProps) {
  useEffect(finish, [finish]);

  return (
    <div>
      <p>
        22andMe goes bankrupt. They have to sell all their data as part of the
        process to pay back creditors, including you and your family's DNA data,
        which makes it easy to identify you in the future.
      </p>
      <AddScore category={ScoreCategory.CAREER} amount={-20} />
    </div>
  );
}
