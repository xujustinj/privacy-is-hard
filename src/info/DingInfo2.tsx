import { SourceLink } from "../components/Source";
import ACLU_Ring from "../sources/ACLU_Ring.json";

export function DingInfo2() {
  return (
    <div>
      <p>
        Now, anyone walking their dog, taking out the trash, delivering
        packages, or just walking past the video doorbell is subject to police
        scrutiny, regardless whether they consent to having their footage used
        in this way or not.
      </p>
      <p>
        You may have consented, but your neighbours captured in video didn't.
        Likewise, your neighbours may have shared their footage with you in the
        background.
      </p>
      <SourceLink {...ACLU_Ring} />
    </div>
  );
}
