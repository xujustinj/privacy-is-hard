import { useEffect } from "react";

export interface EarthquakeProps {
  onCompleteEvent: () => void;
}

export function Earthquake({ onCompleteEvent }: EarthquakeProps) {
  useEffect(onCompleteEvent, [onCompleteEvent]);
  return (
    <div>
      <p>A small earthquake has struck Jollywood!</p>
      <p>
        The city is mostly okay, except for one old apartment building that
        collapsed, killing 50 people.
      </p>
    </div>
  );
}
