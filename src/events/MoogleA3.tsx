import { useContext, useEffect } from "react";
import { GeneratorStateContext } from "../game/Generator";
import { AddScore, ScoreCategory, SubScore } from "../game/Score";
import { BaseEventProps } from "./BaseEvent";

export interface MoogleA3Props extends BaseEventProps {}

export function MoogleA3({ finish }: MoogleA3Props) {
  const state = useContext(GeneratorStateContext);
  useEffect(() => {
    finish();
  }, [state, finish]);

  return (
    <div>
      <p>
      Breaking News: Amid Moogle Layoffs, Angry Ex-Moogler Leaks Moogle Home Recordings
      </p>
      <p>
      Some of those recordings included your voice.
      </p>
    </div>
  );
}
