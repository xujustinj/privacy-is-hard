import { useContext, useEffect } from "react";
import { GeneratorStateContext } from "../../game/Generator";
import { BaseEventProps } from ".././BaseEvent";

export function MoogleB1({ finish }: BaseEventProps) {
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
