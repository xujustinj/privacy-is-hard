import { useEffect } from "react";
import { AddScore, ScoreCategory } from "../../game/Score";
import { BaseEventProps } from ".././BaseEvent";

export function DingB1({ finish }: BaseEventProps) {
  useEffect(finish, [finish]);

  return (
    <div>
      <p>Your bodyguard was enjoying his sandwich when the stalker fan came back and stole the movie script.</p>
      <p>You alert the police, but no cameras caught his face, so the police was not able to find them. The stalker fan released the movie script. Yikes!</p>
      <AddScore category={ScoreCategory.CAREER} amount={-20} />
    </div>
  );
}
