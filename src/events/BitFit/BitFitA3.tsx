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
      You share the BitFit data with your doctor and they are able to quickly prescribe you some heart medication. You start taking it and feel much better.
      </p>
    </div>
  );
}
