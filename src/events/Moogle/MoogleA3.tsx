import { useEffect } from "react";
import { BaseEventProps } from ".././BaseEvent";

export function MoogleA3({ finish }: BaseEventProps) {
  useEffect(finish, [finish]);

  return (
    <div>
      <p>
        Breaking News: Amid Moogle Layoffs, Angry Ex-Moogler Leaks Moogle Home
        Recordings
      </p>
      <p>Some of those recordings included your voice.</p>
    </div>
  );
}
