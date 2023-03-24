import { useEffect } from "react";
import { BaseEventProps } from ".././BaseEvent";

export function BitFitB1({ finish }: BaseEventProps) {
  useEffect(finish, [finish]);

  return (
    <div>
      <p>
        You experience shortness of breath and feel dizzy at the gym. You faint.
        The doctor diagnoses you with heart arrhythmia.
      </p>
    </div>
  );
}
