import { useEffect } from "react";
import { BaseEventProps } from "./BaseEvent";

export function Start({ finish }: BaseEventProps) {
  useEffect(finish, [finish]);

  return (
    <div>
      <p>
        Hi there! Welcome to the life of a celebrity. Your biggest fans are always watching - will you be able to keep up with privacy and still be relevant? Let's find out!
      </p>
    </div>
  );
}
