import { useCallback, useState } from "react";
import { InfoProvider } from "../../game/InfoPanel";
import { AddScore, ScoreCategory } from "../../game/Score";
import { DingInfo2 } from "../../info/DingInfo2";
import { DingInfo3 } from "../../info/DingInfo3";
import { BaseEventProps } from "../BaseEvent";

export const enum PoliceChoice {
  YES,
  NO,
}

export function DingAA3({ finish }: BaseEventProps) {
  const [choice, setChoice] = useState<PoliceChoice | null>(() => null);
  const choose = useCallback(
    (newChoice: PoliceChoice) => {
      setChoice(newChoice);
      finish();
    },
    [setChoice, finish]
  );
  return (
    <div>
      <p>
        Due to an emergency in your community, the police has requested 3 days
        of Ding footage from the entire neighbourhood. Would you like to provide
        video footage to the police?
      </p>
      <button
        onClick={() => choose(PoliceChoice.YES)}
        disabled={choice !== null}
      >
        Yes! It's an emergency after all.
      </button>
      <button
        onClick={() => choose(PoliceChoice.NO)}
        disabled={choice !== null}
      >
        No thanks, Ding already knows too much about me.
      </button>
      {choice === PoliceChoice.YES && (
        <InfoProvider info={{ Component: DingInfo2 }}>
          <AddScore category={ScoreCategory.PRIVACY} amount={-10} />
        </InfoProvider>
      )}
      {choice === PoliceChoice.NO && (
        <InfoProvider info={{ Component: DingInfo3 }}>
          <p>
            Oh no! Ding stored your video on the cloud, and the police got your
            videos without your consent! They went straight to Ding's parent
            company Babazon and asked for the video recordings.
          </p>
          <AddScore category={ScoreCategory.PRIVACY} amount={-20} />
        </InfoProvider>
      )}
    </div>
  );
}
