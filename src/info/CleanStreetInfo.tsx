import { SourceLink } from "../components/Source";
import notkahnjunior_knoughpe from "../sources/notkahnjunior_knoughpe.json";

export function CleanStreetInfo() {
  return (
    <div>
      <p>
        In the real world, it is surprisingly easy to find your personal
        information on social media!
      </p>
      <p>
        In one video, a TikTok user found the full name, birthday, job, general
        location, and real picture of another user just from their profile with
        no posts, a cartoon profile picture, and a vague username.
      </p>
      <SourceLink {...notkahnjunior_knoughpe} />
    </div>
  );
}
