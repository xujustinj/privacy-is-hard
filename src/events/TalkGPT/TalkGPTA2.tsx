import { useContext, useEffect } from "react";
import { GeneratorStateContext } from "../../game/Generator";
import { BaseEventProps } from ".././BaseEvent";

export interface TalkGPTA2 extends BaseEventProps {}

export function TalkGPTA2({ finish }: TalkGPTA2) {
  const state = useContext(GeneratorStateContext);
  useEffect(() => {
    finish();
  }, [state, finish]);

  return (
    <div>
      <p>
        Some genius prompt-engineered a model inversion attack against your
        chatbot. Now Reddit has screenshots of “you” revealing embarrassing
        things about you and your friends!
      </p>
      <p>Your friends are not impressed.</p>
    </div>
  );
}
