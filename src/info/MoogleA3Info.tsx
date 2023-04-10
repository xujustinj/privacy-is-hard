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
        Google Home's microphones are on by default, but Google is not supposed
        to record unless explicitly given consent by the wake phrase "Okay
        Google". Unfortunately, their detection technology isn't perfectly
        accurate. The Belgian news reported that out of these voice excerpts,
        around 10% were never given the wake phrase.
      </p>
      <SourceLink {...Gizmodo_Google} />
    </div>
  );
}
