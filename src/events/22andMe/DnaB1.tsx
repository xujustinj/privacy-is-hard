import { useEffect } from "react";
import { InfoProvider } from "../../game/InfoPanel";
import { AddScore, ScoreCategory } from "../../game/Score";
import { DnaInfo } from "../../info/DnaInfo";
import { BaseEventProps } from "../BaseEvent";

export function TwentyTwoandMeB1({ finish }: BaseEventProps) {
  useEffect(finish, [finish]);

  return (
    <InfoProvider info={{ Component: DnaInfo }}>
      <p>
        22andMe goes bankrupt. They have to sell all their data as part of the
        process to pay back creditors, including you and your family's DNA data,
        which makes it easy to identify you in the future.
      </p>
      <AddScore category={ScoreCategory.CAREER} amount={-20} />
    </InfoProvider>
  );
}
