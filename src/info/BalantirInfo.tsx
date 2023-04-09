import { SourceLink } from "../components/Source";
import BNNPalantir from "../sources/BNN_Palantir.json";

export function BalantirInfo() {
  return (
    <div>
      <p>
        In the real world, Palantir was entrusted with sensitive patient data by
        the NHS in the United Kingdom. Palantir claimed they would create
        software to deliver better health outcomes while ensuring data privacy
        and security.
      </p>
      <p>
        But information regarding the project, its origin, and its purpose is
        vague. Sensitive health data has been transferred to Palantir's Foundry
        system without patient consent or consultation. The lack of transparency
        and clear safeguards means patients' sensitive health data could be
        compromised without them knowing about it.
      </p>
      <SourceLink {...BNNPalantir} />
    </div>
  );
}
