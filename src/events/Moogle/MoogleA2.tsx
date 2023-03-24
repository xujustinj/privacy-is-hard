import { useContext, useEffect } from "react";
import { GeneratorStateContext } from "../../game/Generator";
import { BaseEventProps } from ".././BaseEvent";

export function MoogleA2({ finish }: BaseEventProps) {
  const state = useContext(GeneratorStateContext);
  useEffect(() => {
    finish();
  }, [state, finish]);

  return (
    <div>
      <p>
        Today, you have a table read for your upcoming movie. One of the cast
        members reads out loud this line in the script: "Hey Moogle, what's my
        schedule?". It triggers the voice assistant on your phone, and before
        you can stop it, it says out loud "Buy hemorrhoids cream at 5pm". The
        crew laughs and you're a bit embarrassed.
      </p>
    </div>
  );
}
