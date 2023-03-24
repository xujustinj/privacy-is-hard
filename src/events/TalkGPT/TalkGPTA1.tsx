import { useContext, useEffect } from "react";
import { GeneratorStateContext } from "../../game/Generator";
import { BaseEventProps } from ".././BaseEvent";

export interface TalkGPTA1 extends BaseEventProps {}

export function TalkGPTA1({ finish }: TalkGPTA1) {
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
