import { useEffect } from "react";
import { InfoProvider } from "../../game/InfoPanel";
import { AddScore, ScoreCategory } from "../../game/Score";
import { DingInfo1 } from "../../info/DingInfo1";
import { BaseEventProps } from "../BaseEvent";

export function DingAA2({ finish }: BaseEventProps) {
  useEffect(finish, [finish]);

  return (
    <InfoProvider info={{ Component: DingInfo1 }}>
      <p>
        To your surprise, Babazon used a video of you on your front porch in a
        new Ding adversitement on InstaTok. What?
      </p>
      <AddScore category={ScoreCategory.PRIVACY} amount={-10} />
    </InfoProvider>
  );
}
