import { SourceLink } from "../components/Source";
import ACLU_QR from "../sources/ACLU_QR.json";

export function QRInfo() {
  return (
    <div>
      <p>
        In the real world, many of the QR codes in restaurants are actually
        generated by a different company that collects, uses, and then often
        shares your personal information with other companies.
      </p>
      <p>
        You might be paying for that meal with not just your money, but your
        personal information too &ndash; your location, your demographics, and
        your behaviour.
      </p>
      <p>
        That's not even counting your phone's cookies, advertising ID number,
        and device fingerprint. What an expensive meal!
      </p>
      <SourceLink {...ACLU_QR} />
    </div>
  );
}
