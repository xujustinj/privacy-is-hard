import { useContext, useEffect } from "react";
import { GeneratorStateContext } from "../../game/Generator";
import { BaseEventProps } from ".././BaseEvent";

export interface CleanStreetPrecondition extends BaseEventProps {}

export function CleanStreetPrecondition({ finish }: CleanStreetPrecondition) {
  const state = useContext(GeneratorStateContext);
  useEffect(() => {
    finish();
  }, [state, finish]);

  return (
    <div>
      <p>
        Some people from your city recognize a grocery store that appears in the
        background of your video. Your fans now know which neighbourhood you
        live in!
      </p>
    </div>
  );
}
