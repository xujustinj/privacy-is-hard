import { useContext, useEffect } from "react";
import { GeneratorStateContext } from "../../game/Generator";
import { AddScore, ScoreCategory } from "../../game/Score";
import { BaseEventProps } from ".././BaseEvent";

export interface BitFitA1 extends BaseEventProps {}

export function BitFitA1({ finish }: BitFitA1) {
  const state = useContext(GeneratorStateContext);
  useEffect(() => {
    finish();
  }, [state, finish]);

  return (
    <div>
      <p>
      Uh oh! BitFit experienced a data breach. Your GPS location was part of that data breach, and the paparazzi now know in which gym you train.
      </p>
    </div>
  );
}
