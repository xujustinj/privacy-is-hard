import { useCallback, useState } from "react";

export interface InteractiveProps {
  message: string;
}

export function Interactive({ message }: InteractiveProps) {
  const [timesClicked, setTimesClicked] = useState(0);
  const click = useCallback(() => {
    setTimesClicked(timesClicked + 1);
  }, [timesClicked, setTimesClicked]);

  return (
    <div>
      <p>{message}</p>
      <button onClick={click}>
        This button has been clicked {timesClicked} times.
      </button>
    </div>
  );
}
