import { SourceLink } from "../components/Source";
import HealthcareIT_Cerebral from "../sources/HealthcareIT_Cerebral.json";

export function CardiacInfo() {
  return (
    <div>
      <p>
        In 2023, the consumer-facing telehealth platform Cerebral released a
        Notice of HIPAA Privacy Breach. From 2019 to 2023, they had disclosed
        protected health information to third-party platforms and subcontractors
        without obtaining HIPAA-required assurances.
      </p>
      <SourceLink {...HealthcareIT_Cerebral} />
    </div>
  );
}
