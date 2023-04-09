import { SourceLink } from "../components/Source";
import Gizmodo_Google from "../sources/Gizmodo_Google.json";

export function MoogleA3Info() {
  return (
    <div>
      <p>
        In the real world, a subcontractor at Google leaked over a thousand
        voice recordings of Flemish people to a Belgian news organization.
      </p>
      <p>
        Google Home can record your voice because it has microphones that are on
        by default. The Belgian news reported that out of these voice excerpts,
        around 10% were never given the wake phrase "Okay Google".
      </p>
      <p>
        Google is not supposed to record those audio excerpts without your
        explicit consent, but its detection technology isn't perfectly accurate.
      </p>
      <SourceLink {...Gizmodo_Google} />
    </div>
  );
}
