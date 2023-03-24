import { useContext, useEffect } from "react";
import { GeneratorStateContext } from "../../game/Generator";
import { BaseEventProps } from ".././BaseEvent";

export function TwentyTwoandMeB1({ finish }: BaseEventProps) {
  const state = useContext(GeneratorStateContext);
  useEffect(() => {
    finish();
  }, [state, finish]);

  return (
    <div>
      <p>
        22andMe goes bankrupt. They have to sell all their data as part of the
        process to pay back creditors, including you and your family's DNA data,
        which makes it easy to identify you in the future.
      </p>
    </div>
  );
}
