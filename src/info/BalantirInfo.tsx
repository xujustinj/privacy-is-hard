import { SourceLink } from "../components/Source";
import BNNPalantir from "../sources/BNN_Palantir.json";

export function BalantirInfo() {
  return (
    <div>
      <p>
        In the real world, Palantir was entrusted with sensitive patient data by
        the United Kingdom's National Health Service. Palantir claimed they
        would create software to deliver better health outcomes while ensuring
        data privacy and security.
      </p>
      <p>
        But information is vague regarding the project, its origin, and its
        purpose. Sensitive health data has been transferred to Palantir's
        Foundry system without patient consent or consultation. The lack of
        transparency and clear safeguards means patients' sensitive health data
        could be compromised without them knowing about it.
      </p>
      <SourceLink {...BNNPalantir} />
    </div>
  );
}
