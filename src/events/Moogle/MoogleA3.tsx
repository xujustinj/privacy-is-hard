import { useEffect } from "react";
import { InfoProvider } from "../../game/InfoPanel";
import { AddScore, ScoreCategory } from "../../game/Score";
import { MoogleA3Info } from "../../info/MoogleA3Info";
import { BaseEventProps } from "../BaseEvent";

export function MoogleA3({ finish }: BaseEventProps) {
  useEffect(finish, [finish]);

  return (
    <InfoProvider info={{ Component: MoogleA3Info }}>
      <p>
        Breaking News: Amid Moogle Layoffs, Angry Ex-Moogler Leaks Moogle Home
        Recordings
      </p>
      <p>Some of those recordings included your voice.</p>
      <AddScore category={ScoreCategory.PRIVACY} amount={-5} />
    </InfoProvider>
  );
}
