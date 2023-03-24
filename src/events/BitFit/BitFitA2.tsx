import { useContext, useEffect } from "react";
import { GeneratorStateContext } from "../../game/Generator";
import { AddScore, ScoreCategory, SubScore } from "../../game/Score";
import { BaseEventProps } from ".././BaseEvent";

export interface BitFitA2 extends BaseEventProps {}

export function BitFitA2({ finish }: BitFitA2) {
  const state = useContext(GeneratorStateContext);
  useEffect(() => {
    finish();
  }, [state, finish]);

  return (
    <div>
      <p>
      Your BitFit alerts you that it is detecting an unusual heartbeat. The doctor diagnoses you with heart arrhythmia.
      </p>
    </div>
  );
}
