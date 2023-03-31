import { useEffect } from "react";
import { AddScore, ScoreCategory } from "../../game/Score";
import { BaseEventProps } from "../BaseEvent";

export function CardiacB3({ finish }: BaseEventProps) {
  useEffect(finish, [finish]);

  return (
    <div>
      <p>
        You ace an audition for an action movie, and are about to get the role
        when the casting director sees the article. You explain that your
        doctor's treatments are effective, but they request an additional
        physical assessment to be sure. You are understandably annoyed.
      </p>
      <AddScore category={ScoreCategory.HAPPINESS} amount={-5} />
    </div>
  );
}
