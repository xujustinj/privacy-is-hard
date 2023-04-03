import { useEffect } from "react";
import { InfoProvider } from "../../game/InfoPanel";
import { AddScore, ScoreCategory } from "../../game/Score";
import { AngelInfo } from "../../info/AngelInfo";
import { BaseEventProps } from "../BaseEvent";

export function AngelTrendA1({ finish }: BaseEventProps) {
  useEffect(finish, [finish]);

  return (
    <InfoProvider info={{ Component: AngelInfo }}>
      <p>
        Some genius figured out a way to undo the silhouette filter. Your nude
        dancing is now all over 44chan. You frantically try to get the videos
        taken down, but people just make new anonymous accounts and post it
        again.
      </p>
      <AddScore category={ScoreCategory.PRIVACY} amount={-20} />
    </InfoProvider>
  );
}
