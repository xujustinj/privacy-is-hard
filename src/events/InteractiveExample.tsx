import { useCallback, useState } from "react";
import { BaseEventProps } from "./BaseEvent";

export interface InteractiveProps extends BaseEventProps {
  message: string;
}

export function Interactive({ finish, message }: InteractiveProps) {
  const [timesClicked, setTimesClicked] = useState(0);
  const click = useCallback(() => {
    setTimesClicked(timesClicked + 1);
    finish();
  }, [timesClicked, setTimesClicked, finish]);

  return (
    <div>
      <p>{message}</p>
      <button onClick={click}>
        This button has been clicked {timesClicked} times.
      </button>
    </div>
  );
}
