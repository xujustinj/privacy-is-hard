import { SourceLink } from "../game/Source";
import HealthcareIT_Cerebral from "../sources/HealthcareIT_Cerebral.json";

export function CardiacInfo() {
  return (
    <div>
      <p>
        In 2023, the consumer-facing telehealth platform Cerebral, released a
        Notice of HIPAA Privacy Breach. They disclosed protected health
        information to third-party platforms and subcontractors. without having
        obtained HIPAA-required assurances from 2019 to 2023.
      </p>
      <SourceLink {...HealthcareIT_Cerebral} />
    </div>
  );
}
