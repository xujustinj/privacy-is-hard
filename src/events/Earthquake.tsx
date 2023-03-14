import { useContext, useEffect } from "react";
import { GeneratorStateContext } from "../game/Generator";
import { BaseEventProps } from "./BaseEvent";

export interface EarthquakeProps extends BaseEventProps {}

export function Earthquake({ finish }: EarthquakeProps) {
  const state = useContext(GeneratorStateContext);
  useEffect(() => {
    state.earthquake = true;
    finish();
  }, [finish, state]);

  return (
    <div>
      <p>A small earthquake has struck Jollywood.</p>
      <p>
        The city is mostly okay, except for one old apartment building that
        collapsed, killing 50 people.
      </p>
    </div>
  );
}
