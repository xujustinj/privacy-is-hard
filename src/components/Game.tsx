import { useCallback, useMemo, useState } from "react";
import styled from "styled-components";
import GameBackground from "../images/background.jpg";
import { GameEvent } from "../model/Event";
import { Render, RenderProps } from "../util/Render";
import { GameEventContainer } from "./Event";
import { Feed } from "./Feed";
import {
  Generator,
  GeneratorStateContext,
  SequenceGenerator,
} from "./Generator";
import { InfoContext, InfoPanel } from "./InfoPanel";
import {
  ScoreBar,
  ScoreCategory,
  Scores,
  ScoresContext,
  ScoreUpdater,
} from "./Score";

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
  const [scores, setScores] = useState<Scores>(
    () => new Map(Object.values(ScoreCategory).map((value) => [value, 100]))
  );
  const generator = useMemo<Generator>(() => new SequenceGenerator(), []);
  const [events, setEvents] = useState<ReadonlyArray<GameEvent>>(() => [
    generator.next()!,
  ]);

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
    }
  }, [generator, setEvents]);

  return (
    <ScoresContext.Provider value={[scores, addScore]}>
      <GeneratorStateContext.Provider value={generator.state}>
        <InfoContext.Provider value={[info, setInfo]}>
          <Background>
            <GameContainer>
              <ScoreBar scores={scores} />
              <BodyContainer>
                <Feed>
                  {events.map((event) => {
                    const { id, eventRender } = event;
                    return (
                      <GameEventContainer key={id}>
                        <Render
                          onNext={
                            event === events[events.length - 1]
                              ? onAdvance
                              : undefined
                          }
                          {...eventRender}
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
      </GeneratorStateContext.Provider>
    </ScoresContext.Provider>
  );
}
