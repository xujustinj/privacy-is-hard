import { useEffect } from "react";
import { AddScore, ScoreCategory } from "../../game/Score";
import { BaseEventProps } from "../BaseEvent";

export function TalkGPTA1({ finish }: BaseEventProps) {
  useEffect(finish, [finish]);

  return (
    <div>
      <p>The app is a huge hit. Your fans love it!</p>
      <AddScore category={ScoreCategory.CAREER} amount={5} />
    </div>
  );
}
