import { SourceLink } from "../game/Source";
import Politico_Ring from "../sources/Politico_Ring.json";

export function DingInfo3() {
  return (
    <div>
      <p>
        In the real world, the video doorbell company Ring did share video
        footage with law enforcement officers, even when homeowners did not
        consent.
      </p>
      <p>
        Owners of these devices expect privacy for the devices they ostensibly
        own, yet their devices are also part of a 24/7 surveillance network.
      </p>
      <p>
        Courts have struggled to limit police warrants, giving the police access
        to accounts that hold large amounts of data that may not be relevant to
        the investigation.
      </p>
      <SourceLink {...Politico_Ring} />
    </div>
  );
}
