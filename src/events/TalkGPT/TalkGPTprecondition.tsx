import { useContext, useEffect } from "react";
import { GeneratorStateContext } from "../../game/Generator";
import { BaseEventProps } from ".././BaseEvent";

export function TalkGPTprecondition({ finish }: BaseEventProps) {
  const state = useContext(GeneratorStateContext);
  useEffect(() => {
    finish();
  }, [state, finish]);

  return (
    <div>
      <p>
        On your daily Americano run at Moonbucks, you run into a fan who
        recognizes you, and you have a lovely conversation. You wish that you
        could connect with more fans at the same time...
      </p>
    </div>
  );
}
