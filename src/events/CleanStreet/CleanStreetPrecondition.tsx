import { useEffect } from "react";
import { BaseEventProps } from "../BaseEvent";

export function CleanStreetPrecondition({ finish }: BaseEventProps) {
  useEffect(finish, [finish]);

  return (
    <div>
      <p>
        A small earthquake has struck Jollywood! The city is mostly okay, except
        one old apartment building that collapsed, killing 50 people.
      </p>
    </div>
  );
}
