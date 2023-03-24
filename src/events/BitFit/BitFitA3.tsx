import { useEffect } from "react";
import { BaseEventProps } from ".././BaseEvent";

export function BitFitA2({ finish }: BaseEventProps) {
  useEffect(finish, [finish]);

  return (
    <div>
      <p>
        You share the BitFit data with your doctor and they are able to quickly
        prescribe you some heart medication. You start taking it and feel much
        better.
      </p>
    </div>
  );
}
