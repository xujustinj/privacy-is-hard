import { useContext, useEffect } from "react";
import { GeneratorStateContext } from "../../game/Generator";
import { BaseEventProps } from ".././BaseEvent";

export function TalkGPTA1({ finish }: BaseEventProps) {
  const state = useContext(GeneratorStateContext);
  useEffect(() => {
    finish();
  }, [state, finish]);

  return (
    <div>
      <p>The app is a huge hit. Your fans love it!</p>
    </div>
  );
}
