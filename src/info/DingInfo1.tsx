import { SourceLink } from "../components/Source";
import Ring_ToS from "../sources/Ring_ToS.json";

export function DingInfo1() {
  return (
    <div>
      <p>This is what you agreed to in the Terms of Service!</p>
      <p>
        "You hereby grant Ring and its licensees an unlimited, irrevocable,
        fully paid and royalty-free, perpetual, worldwide rights to exploit
        Shared Content for any purpose"
      </p>
      <p>Long story short, Ring can do whatever they want with your videos!</p>
      <SourceLink {...Ring_ToS} />
    </div>
  );
}
