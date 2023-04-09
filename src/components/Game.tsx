import { useState } from "react";
import styled from "styled-components";
import GameBackground from "../images/background.jpg";
import { RenderProps } from "../util/Render";
import { Feed } from "./Feed";
import { InfoContext, InfoPanel } from "./InfoPanel";
import { ScoreBar } from "./Score";

const Background = styled.div`
  background-image: url(${GameBackground});
  background-size: cover;
  height: 100vh;
  width: 100vw;
  padding: 64px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const GameContainer = styled.div`
  color: white;
  height: 100%;
  width: 100%;
  max-width: 1024pt;
  display: flex;
  row-gap: 8px;
  flex-direction: column;
  overflow: hidden;
  border-radius: 8px;
`;

const BodyContainer = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 8px;
  min-height: 0; /* https://stackoverflow.com/a/66689926 */
  height: 100%;
  align-items: stretch;
`;

export function Game() {
  const [info, setInfo] = useState<RenderProps | null>(null);

  return (
    <InfoContext.Provider value={[info, setInfo]}>
      <Background>
        <GameContainer>
          <ScoreBar />
          <BodyContainer>
            <Feed />
            <InfoPanel />
          </BodyContainer>
        </GameContainer>
      </Background>
    </InfoContext.Provider>
  );
}
