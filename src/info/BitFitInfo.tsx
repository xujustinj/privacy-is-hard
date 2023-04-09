import { SourceLink } from "../components/Source";
import FierceHealthcareFitBit from "../sources/FierceHealthcare_FitBit.json";

export function BitFitInfo() {
  return (
    <div>
      <p>
        In the real world, FitBit experienced a data breach in 2021. The name,
        date of birth, geolocation data of over 61 million users was
        compromised.
      </p>
      <p>
        Even though wearable devices and smartphones can collect
        patient-generated health data, there are currently no clear HIPAA
        regulations that apply to wearable technology as long as the data is for
        personal use.
      </p>
      <p>
        Not everyone has paparazzi, but bad actors do not discriminate. The data
        could be used to commit fraud and extortion.
      </p>
      <SourceLink {...FierceHealthcareFitBit} />
    </div>
  );
}
