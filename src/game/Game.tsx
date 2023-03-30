import { useCallback, useMemo, useState } from "react";
import styled from "styled-components";
import GameBackground from "../images/background.jpg";
import { Render, RenderProps } from "../util/Render";
import { GameEvent, GameEventContainer } from "./Event";
import { Feed } from "./Feed";
import {
  Generator,
  GeneratorStateContext,
  SequenceGenerator,
} from "./Generator";
import { InfoPanelContainer } from "./InfoPanel";
import {
  ScoreBar,
  ScoreCategory,
  Scores,
  ScoresContext,
  ScoreUpdater,
} from "./Score";

const GameContainer = styled.div`
  background-image: url(${GameBackground});
  background-size: cover;
  height: 100vh;
  width: 100vw;
  padding: 64px;
  display: flex;
  row-gap: 16px;
  flex-direction: column;
`;

const BodyContainer = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 16px;
  min-height: 0; // https://stackoverflow.com/a/66689926
  height: 100%;
  align-items: stretch;
`;

export function Game() {
  const [events, setEvents] = useState<ReadonlyArray<GameEvent>>([]);
  const [activeEvent, setActiveEvent] = useState<GameEvent | null>(null);
  const [scores, setScores] = useState<Scores>(
    () => new Map(Object.values(ScoreCategory).map((value) => [value, 100]))
  );
  const generator = useMemo<Generator>(() => new SequenceGenerator(), []);

  const onFinish = useCallback(
    (event: GameEvent) => {
      setActiveEvent((activeEvent) => {
        return event === activeEvent ? null : activeEvent;
      });
    },
    [setActiveEvent]
  );

  const addScore = useCallback<ScoreUpdater>(
    (category: ScoreCategory, amount: number) => {
      setScores((scores: Scores) => {
        const newScores = new Map(scores);
        newScores.set(category, newScores.get(category)! + amount);
        return newScores;
      });
    },
    [setScores]
  );

  const [info, setInfo] = useState<RenderProps | null>(null);

  const onAdvance = useCallback(() => {
    const nextEvent = generator.next();
    if (nextEvent !== null) {
      setEvents((events) => [...events, nextEvent]);
      setActiveEvent(nextEvent);
    }
  }, [generator, setActiveEvent, setEvents]);

  return (
    <ScoresContext.Provider value={[scores, addScore]}>
      <GeneratorStateContext.Provider value={generator.state}>
        <GameContainer>
          <ScoreBar scores={scores} />
          <BodyContainer>
            <Feed onAdvance={activeEvent === null ? onAdvance : null}>
              {events.map((event) => {
                const { id, eventRender, infoRender } = event;
                return (
                  <GameEventContainer
                    key={id}
                    onMouseOver={() => setInfo(infoRender)}
                  >
                    <Render finish={() => onFinish(event)} {...eventRender} />
                  </GameEventContainer>
                );
              })}
            </Feed>
            <InfoPanelContainer>
              {info !== null && <Render {...info} />}
            </InfoPanelContainer>
          </BodyContainer>
        </GameContainer>
      </GeneratorStateContext.Provider>
    </ScoresContext.Provider>
  );
}
