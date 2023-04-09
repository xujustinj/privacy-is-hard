import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import { Fonts } from "./fonts/Fonts";
import { Game } from "./game/Game";
import GlobalStyle from "./globalStyles";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  // No StrictMode here because running effects twice causes double-scoring.
  // https://stackoverflow.com/a/60619061
  <>
    {/* <React.StrictMode> */}
    <GlobalStyle />
    <Fonts />
    <RecoilRoot>
      <Game />
    </RecoilRoot>
    {/* </React.StrictMode> */}
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
