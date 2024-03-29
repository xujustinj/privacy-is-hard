import { SourceLink } from "../components/Source";
import NAACL_Inversion from "../sources/NAACL_Inversion.json";

export function TalkGPTInfo() {
  return (
    <div>
      <p>
        Machine learning models learn from the data they are trained on, like
        your previous text messages. If they learn too much (overfit), then an
        attacker can trick a generative model (like a chatbot) into outputting
        parts of its training data by giving carefully-chosen inputs. This is
        bad if the training data contains private information.
      </p>
      <p>
        Fortunately, there are techniques to combat this. In this imaginary
        case, the startup didn't do that.
      </p>
      <SourceLink {...NAACL_Inversion} />
    </div>
  );
}
