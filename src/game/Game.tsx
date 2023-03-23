import { useCallback, useMemo, useState } from "react";
import styled from "styled-components";
import GameBackground from "../images/background.jpg";
import { Render, RenderProps } from "../util/Render";
import { GameEvent, GameEventContainer } from "./Event";
import { Feed } from "./Feed";
import { Generator, GeneratorStateContext, SequenceGenerator } from "./Generator";
import { InfoPanelContainer } from "./InfoPanel";
import {
  ScoreBar,
  ScoreCategory,
  Scores,
  ScoresContext,
  ScoresUpdater,
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
  height: 100%;
  align-items: stretch;
`;

export function Game() {
  const generator = useMemo<Generator>(() => new SequenceGenerator(), []);
  const [events, setEvents] = useState<ReadonlyArray<GameEvent>>([]);
  const [activeEvent, setActiveEvent] = useState<GameEvent | null>(null);

  const canAdvance = activeEvent === null;
  const onAdvance = useCallback(() => {
    if (canAdvance) {
      const nextEvent = generator.next();
      if (nextEvent !== null) {
        setEvents([...events, nextEvent]);
        setActiveEvent(nextEvent);
      }
    }
  }, [canAdvance, events, generator, setActiveEvent, setEvents]);

  const onFinish = useCallback(
    (event: GameEvent) => {
      if (event === activeEvent) {
        setActiveEvent(null);
      }
    },
    [activeEvent, setActiveEvent]
  );

  const [scores, setScores] = useState<Scores>(
    () => new Map(Object.values(ScoreCategory).map((value) => [value, 100]))
  );
  const addScores = useCallback<ScoresUpdater>(
    (updates: Scores) => {
      const newScores = new Map(scores);
      for (const [category, update] of updates) {
        newScores.set(category, (scores.get(category) ?? 0) + update);
      }
      setScores(newScores);
    },
    [scores, setScores]
  );

  const [info, setInfo] = useState<RenderProps | null>(() => null);

  return (
    <ScoresContext.Provider value={[scores, addScores]}>
      <GeneratorStateContext.Provider value={generator.state}>
        <GameContainer>
          <ScoreBar scores={scores} />
          <BodyContainer>
            <Feed onAdvance={canAdvance ? onAdvance : null}>
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
