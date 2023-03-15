import { createContext } from "react";
import styled from "styled-components";

export enum ScoreCategory {
  PRIVACY = "privacy",
  CAREER = "career",
  HEALTH = "health",
  SOCIAL = "social",
  MOOD = "mood",
}

export const ScoreCategoryDetails = {
  [ScoreCategory.PRIVACY]: {
    displayName: "Privacy",
  },
  [ScoreCategory.CAREER]: {
    displayName: "Career",
  },
  [ScoreCategory.HEALTH]: {
    displayName: "Health",
  },
  [ScoreCategory.SOCIAL]: {
    displayName: "Social",
  },
  [ScoreCategory.MOOD]: {
    displayName: "Mood",
  },
} as const;

export type Scores = ReadonlyMap<ScoreCategory, number>;
export type ScoreChangeFunction = (
  category: ScoreCategory,
  change: number
) => void;

export const ScoresContext = createContext<[Scores, ScoreChangeFunction]>([
  new Map(),
  () => {},
]);

export interface ScoresProps {
  scores: Scores;
}

const ScoresContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  padding: 16px 64px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
`;

interface ScoreProps {
  category: ScoreCategory;
  score: number;
}

const ScoreContainer = styled.span`
  color: white;
`;

function Score({ category, score }: ScoreProps) {
  const { displayName } = ScoreCategoryDetails[category];
  return (
    <ScoreContainer>
      {displayName} {score}
    </ScoreContainer>
  );
}

export function ScoreBar({ scores }: ScoresProps) {
  return (
    <ScoresContainer>
      {Array.from(scores.entries()).map(([category, score]) => (
        <Score key={category} category={category} score={score} />
      ))}
    </ScoresContainer>
  );
}
