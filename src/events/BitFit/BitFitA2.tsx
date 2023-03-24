import { useEffect } from "react";
import { BaseEventProps } from ".././BaseEvent";

export function BitFitA2({ finish }: BaseEventProps) {
  useEffect(finish, [finish]);

  return (
    <div>
      <p>
        Your BitFit alerts you that it is detecting an unusual heartbeat. The
        doctor diagnoses you with heart arrhythmia.
      </p>
    </div>
  );
}
