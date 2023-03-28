import { useEffect } from "react";
import { AddScore, ScoreCategory } from "../../game/Score";
import { BaseEventProps } from ".././BaseEvent";

export function CleanStreetAC1({ finish }: BaseEventProps) {
  useEffect(finish, [finish]);

  return (
    <div>
      <p>
        Some people from your city recognize a grocery store that appears in the
        background of your video. Your fans now know which neighbourhood you
        live in!
      </p>
      <AddScore category={ScoreCategory.PRIVACY} amount={-20} />
    </div>
  );
}
