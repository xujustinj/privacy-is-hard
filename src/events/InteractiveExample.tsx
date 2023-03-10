import { useCallback, useState } from "react";

export interface InteractiveProps {
  onCompleteEvent: () => void;
  message: string;
}

export function Interactive({ onCompleteEvent, message }: InteractiveProps) {
  const [timesClicked, setTimesClicked] = useState(0);
  const click = useCallback(() => {
    setTimesClicked(timesClicked + 1);
    onCompleteEvent();
  }, [timesClicked, setTimesClicked, onCompleteEvent]);

  return (
    <div>
      <p>{message}</p>
      <button onClick={click}>
        This button has been clicked {timesClicked} times.
      </button>
    </div>
  );
}
