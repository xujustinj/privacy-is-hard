import { SourceLink } from "../components/Source";
import PopBuzzSilhouette from "../sources/PopBuzz_Silhouette.json";

export function AngelInfo() {
  return (
    <div>
      <p>
        In the real world, TikTok did have a viral Silhouette challenge that was
        exploited maliciously. The challenge involved a person going from
        "innocent" to "sexy" using TikTok's "Vin Rouge" filter.
      </p>
      <p>
        Some users appeared nude in their videos, knowing that the filter would
        cover them with a black silhouette effect. But some people edited the
        lighting to make the original image appear clearer, and one Reddit
        thread even detailed how to remove the filter.
      </p>
      <SourceLink {...PopBuzzSilhouette} />
    </div>
  );
}
