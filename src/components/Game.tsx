import { useCallback, useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { SequenceGenerator } from "../events/SequenceGenerator";
import { Start } from "../events/Start";
import GameBackground from "../images/background.jpg";
import { GameEvent } from "../model/Event";
import { EventGenerator } from "../model/EventGenerator";
import { gameState, useResetGameState } from "../model/Game";
import { Render, RenderProps } from "../util/Render";
import { GameEventContainer } from "./Event";
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

const StartEvent: GameEvent = {
  id: "start",
  eventRender: { Component: Start },
};

export function Game() {
  const [generator, setGenerator] = useState<EventGenerator>(
    () => new SequenceGenerator()
  );
  const game = useRecoilValue(gameState);
  const [events, setEvents] = useState<ReadonlyArray<GameEvent>>([StartEvent]);

  const [info, setInfo] = useState<RenderProps | null>(null);

  const onNext = useCallback(() => {
    const nextEvent = generator.next(game);
    if (nextEvent !== null) {
      setEvents((events) => [...events, nextEvent]);
    }
  }, [generator, game, setEvents]);

  const resetGame = useResetGameState();

  const onReset = useCallback(() => {
    setGenerator(new SequenceGenerator());
    resetGame();
    setEvents([StartEvent]);
    setInfo(null);
  }, [setGenerator, setEvents, setInfo, resetGame]);

  return (
    <InfoContext.Provider value={[info, setInfo]}>
      <Background>
        <GameContainer>
          <ScoreBar />
          <BodyContainer>
            <Feed>
              {events.map((event) => {
                const { id, eventRender } = event;
                return (
                  <GameEventContainer key={id}>
                    <Render
                      onNext={
                        event === events[events.length - 1] ? onNext : undefined
                      }
                      {...eventRender}
                      onReset={onReset}
                    />
                  </GameEventContainer>
                );
              })}
            </Feed>
            <InfoPanel />
          </BodyContainer>
        </GameContainer>
      </Background>
    </InfoContext.Provider>
  );
}
