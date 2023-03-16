import { createContext } from "react";
import styled from "styled-components";
import Career from "../images/career.png";
import Happiness from "../images/happiness.png";
import Health from "../images/health.png";
import Privacy from "../images/privacy.png";
import Social from "../images/social.png";

export enum ScoreCategory {
  PRIVACY = "privacy",
  CAREER = "career",
  HEALTH = "health",
  SOCIAL = "social",
  HAPPINESS = "happiness",
}

export const ScoreCategoryDetails = {
  [ScoreCategory.PRIVACY]: {
    displayName: "Privacy",
    iconSrc: Privacy,
    iconColor: "rgb(0, 128, 255)",
  },
  [ScoreCategory.CAREER]: {
    displayName: "Career",
    iconSrc: Career,
    iconColor: "rgb(255, 191, 0)",
  },
  [ScoreCategory.HEALTH]: {
    displayName: "Health",
    iconSrc: Health,
    iconColor: "rgb(255, 0, 0)",
  },
  [ScoreCategory.SOCIAL]: {
    displayName: "Social",
    iconSrc: Social,
    iconColor: "rgb(255, 0, 128)",
  },
  [ScoreCategory.HAPPINESS]: {
    displayName: "Happiness",
    iconSrc: Happiness,
    iconColor: "rgb(128, 255, 0)",
  },
} as const;

export type Scores = ReadonlyMap<ScoreCategory, number>;
export type ScoresUpdater = (changes: Scores) => void;

export const ScoresContext = createContext<[Scores, ScoresUpdater]>([
  new Map(),
  () => {},
]);

export interface ScoresProps {
  scores: Scores;
}

const Icon = styled.span<{ src: string; color: any }>`
  display: inline-block;
  mask-image: url(${(props) => props.src});
  mask-size: contain;
  background-color: ${(props) => props.color};
  width: 0.8em;
  height: 0.8em;
`;

const ScoresContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
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
  font-size: 14pt;
`;

const ScoreNumber = styled.span<{ color: any }>`
  display: inline-block;
  width: 2em;
  text-align: end;
  color: ${(props) => props.color};
`;

interface RGB {
  r: number;
  g: number;
  b: number;
}

function rgb({ r, g, b }: RGB) {
  return `rgb(${255 * r}, ${255 * g}, ${255 * b})`;
}

function Score({ category, score }: ScoreProps) {
  const { displayName, iconSrc, iconColor } = ScoreCategoryDetails[category];
  const normalizedScore = (score - 100) / 100; // normalized
  const scoreColor = rgb({
    r: 1 - normalizedScore,
    g: 1 + normalizedScore,
    b: 1 - Math.sqrt(Math.abs(normalizedScore)),
  });
  return (
    <ScoreContainer>
      <Icon aria-hidden src={iconSrc} color={iconColor} />
      &nbsp;
      {displayName}
      &nbsp;
      <ScoreNumber color={scoreColor}>{score}</ScoreNumber>
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
