import { useEffect } from "react";
import { BaseEventProps } from ".././BaseEvent";

export function BitFitA1({ finish }: BaseEventProps) {
  useEffect(finish, [finish]);

  return (
    <div>
      <p>
        Uh oh! BitFit experienced a data breach. Your GPS location was part of
        that data breach, and the paparazzi now know in which gym you train.
      </p>
    </div>
  );
}
