import { useContext, useEffect } from "react";
import { GeneratorStateContext } from "../game/Generator";
import { BaseEventProps } from "./BaseEvent";

export function AngelTrendA1({ finish }: BaseEventProps) {
  const state = useContext(GeneratorStateContext);
  useEffect(() => {
    finish();
  }, [state, finish]);

  return (
    <div>
      <p>
        Some genius figured out a way to undo the silhouette filter. Your nude
        dancing is now all over 44chan. You frantically try to get the videos
        taken down, but people just make new anonymous accounts and post it
        again.
      </p>
    </div>
  );
}
