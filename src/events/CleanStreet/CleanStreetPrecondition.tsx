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
        A small earthquake has struck Hollywood! The city is mostly okay, except
        one old apartment building that collapsed, killing 50 people.
      </p>
    </div>
  );
}
