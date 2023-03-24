import { useContext, useEffect } from "react";
import { GeneratorStateContext } from "../../game/Generator";
import { AddScore, ScoreCategory } from "../../game/Score";
import { BaseEventProps } from ".././BaseEvent";

export interface BitFitB2 extends BaseEventProps {}

export function BitFitA2({ finish }: BitFitB2) {
  const state = useContext(GeneratorStateContext);
  useEffect(() => {
    finish();
  }, [state, finish]);

  return (
    <div>
      <p>
      The doctor orders some tests, which take a while, but you eventually get prescribed some heart medication. You start taking it and feel much better.
      </p>
    </div>
  );
}
