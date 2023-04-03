import { useEffect } from "react";
import { InfoProvider } from "../../game/InfoPanel";
import { AddScore, ScoreCategory } from "../../game/Score";
import { TalkGPTInfo } from "../../info/TalkGPTInfo";
import { BaseEventProps } from "../BaseEvent";

export function TalkGPTA2({ finish }: BaseEventProps) {
  useEffect(finish, [finish]);

  return (
    <InfoProvider info={{ Component: TalkGPTInfo }}>
      <p>
        Some genius prompt-engineered a model inversion attack against your
        chatbot. Now Reddit has screenshots of "you" revealing embarrassing
        things about you and your friends!
      </p>
      <p>Your friends are not impressed.</p>
      <AddScore category={ScoreCategory.SOCIAL} amount={-10} />
      <AddScore category={ScoreCategory.PRIVACY} amount={-10} />
    </InfoProvider>
  );
}
