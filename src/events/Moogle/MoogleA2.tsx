import { useEffect } from "react";
import { AddScore, ScoreCategory } from "../../game/Score";
import { BaseEventProps } from "../BaseEvent";

export function MoogleA2({ finish }: BaseEventProps) {
  useEffect(finish, [finish]);

  return (
    <div>
      <p>
        Today, you have a table read for your upcoming movie. One of the cast
        members reads out loud this line in the script: "Hey Moogle, what's my
        schedule?". It triggers the voice assistant on your phone, and before
        you can stop it, it says out loud "Buy hemorrhoids cream at 5pm". The
        crew laughs and you're a bit embarrassed.
      </p>
      <AddScore category={ScoreCategory.PRIVACY} amount={-5} />
      <AddScore category={ScoreCategory.HAPPINESS} amount={-5} />
    </div>
  );
}
