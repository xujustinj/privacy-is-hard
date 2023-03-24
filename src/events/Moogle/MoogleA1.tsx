import { useContext, useEffect } from "react";
import { GeneratorStateContext } from "../../game/Generator";
import { AddScore, ScoreCategory, SubScore } from "../../game/Score";
import { BaseEventProps } from ".././BaseEvent";

export interface MoogleA1Props extends BaseEventProps {}

export function MoogleA1({ finish }: MoogleA1Props) {
  const state = useContext(GeneratorStateContext);
  useEffect(() => {
    finish();
  }, [state, finish]);

  return (
    <div>
      <p>
      Moogle Home wakes you up every morning and reminds you of your appointments while you brush your teeth. It feels like a load has been taken off your shoulders!
      </p>
    </div>
  );
}
