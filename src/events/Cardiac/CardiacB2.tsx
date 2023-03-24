import { useEffect } from "react";
import { BaseEventProps } from ".././BaseEvent";

export function CardiacB2({ finish }: BaseEventProps) {
  useEffect(finish, [finish]);

  return (
    <div>
      <p>
      An unscrupulous Jollywood reporter sifts through the data obtained by an ad agency from Cardiac. Finding you among the data, the reporter writes a tabloid piece on your heart issues, speculating about your health.
      </p>
    </div>
  );
}