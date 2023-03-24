import { useContext, useEffect } from "react";
import { GeneratorStateContext } from "../../game/Generator";
import { BaseEventProps } from ".././BaseEvent";

export interface MoogleB1Props extends BaseEventProps {}

export function MoogleB1({ finish }: MoogleB1Props) {
  const state = useContext(GeneratorStateContext);
  useEffect(() => {
    finish();
  }, [state, finish]);

  return (
    <div>
      <p>
        Ugh, you totally forgot there was a family dinner last night! And you're
        still stressed from a million other things on your plate.
      </p>
    </div>
  );
}
