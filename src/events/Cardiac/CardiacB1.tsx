import { useEffect } from "react";
import { AddScore, ScoreCategory } from "../../game/Score";
import { BaseEventProps } from ".././BaseEvent";

export function CardiacB1({ finish }: BaseEventProps) {
  useEffect(finish, [finish]);

  return (
    <div>
      <p>
        Scandal! Cardiac admits to using third-party trackers on its website. Cardiac has been selling the name, date of birth, gender, contact information, and health conditions of millions of Cardiac users (including you) for years!
      </p>
      <AddScore category={ScoreCategory.PRIVACY} amount={-20} />
    </div>
  );
}
