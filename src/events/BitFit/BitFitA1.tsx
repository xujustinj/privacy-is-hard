import { useEffect } from "react";
import { InfoProvider } from "../../game/InfoPanel";
import { AddScore, ScoreCategory } from "../../game/Score";
import { BitFitInfo } from "../../info/BitFitInfo";
import { BaseEventProps } from "../BaseEvent";

export function BitFitA1({ finish }: BaseEventProps) {
  useEffect(finish, [finish]);

  return (
    <InfoProvider info={{ Component: BitFitInfo }}>
      <p>
        Uh oh! BitFit experienced a data breach. Your GPS location was part of
        that data breach, and the paparazzi now know in which gym you train.
      </p>
      <AddScore category={ScoreCategory.PRIVACY} amount={-10} />
    </InfoProvider>
  );
}
