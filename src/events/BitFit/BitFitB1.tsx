import { useContext, useEffect } from "react";
import { GeneratorStateContext } from "../../game/Generator";
import { AddScore, ScoreCategory, SubScore } from "../../game/Score";
import { BaseEventProps } from ".././BaseEvent";

export interface BitFitB1 extends BaseEventProps {}

export function BitFitB1({ finish }: BitFitB1) {
  const state = useContext(GeneratorStateContext);
  useEffect(() => {
    finish();
  }, [state, finish]);

  return (
    <div>
      <p>
      You experience shortness of breath and feel dizzy at the gym. You faint. The doctor diagnoses you with heart arrhythmia.
      </p>
    </div>
  );
}
