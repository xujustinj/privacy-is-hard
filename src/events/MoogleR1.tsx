import { useContext, useEffect } from "react";
import { GeneratorStateContext } from "../game/Generator";
import { AddScore, ScoreCategory, SubScore } from "../game/Score";
import { BaseEventProps } from "./BaseEvent";

export interface MoogleR1Props extends BaseEventProps {}

export function MoogleR1({ finish }: MoogleR1Props) {
  const state = useContext(GeneratorStateContext);
  useEffect(() => {
    finish();
  }, [state, finish]);

  return (
    <div>
      <p>
      Ugh, you totally forgot there was a family dinner last night! And you're still stressed from a million other things on your plate.
      </p>
    </div>
  );
}
