import { createContext, useContext, useEffect } from "react";
import styled from "styled-components";
import Career from "../images/career.png";
import Happiness from "../images/happiness.png";
import Health from "../images/health.png";
import Privacy from "../images/privacy.png";
import Social from "../images/social.png";
import { Colors, rgb, rgba } from "../util/colors";

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
    iconColor: rgb({ r: 0, g: 128, b: 255 }),
  },
  [ScoreCategory.CAREER]: {
    displayName: "Career",
    iconSrc: Career,
    iconColor: rgb({ r: 255, g: 192, b: 0 }),
  },
  [ScoreCategory.HEALTH]: {
    displayName: "Health",
    iconSrc: Health,
    iconColor: rgb({ r: 255, g: 0, b: 0 }),
  },
  [ScoreCategory.SOCIAL]: {
    displayName: "Social",
    iconSrc: Social,
    iconColor: rgb({ r: 255, g: 0, b: 128 }),
  },
  [ScoreCategory.HAPPINESS]: {
    displayName: "Happiness",
    iconSrc: Happiness,
    iconColor: rgb({ r: 128, g: 255, b: 0 }),
  },
} as const;

export type Scores = ReadonlyMap<ScoreCategory, number>;
export type ScoreUpdater = (category: ScoreCategory, amount: number) => void;
export function addScore(
  scores: Scores,
  category: ScoreCategory,
  amount: number
): Scores {
  const newScores = new Map(scores);
  newScores.set(category, newScores.get(category)! + amount);
  return newScores;
}

export const ScoresContext = createContext<[Scores, ScoreUpdater]>([
  new Map(),
  () => {},
]);

export interface ScoresProps {
  scores: Scores;
}

const ScoresContainer = styled.div`
  background-color: ${rgba(Colors.sectionBackground)};
  padding: 16px 64px;
  display: flex;
  flex-direction: row;
  font-size: 16pt;
  justify-content: space-between;
  line-height: 1;
`;

interface ScoreProps {
  category: ScoreCategory;
  score: number;
}

const ScoreName = styled.span<{ src: string; color: string }>`
  font-weight: bold;

  &:before {
    content: "";
    display: block;
    mask-image: url(${(props) => props.src});
    mask-size: contain;
    background-color: ${(props) => props.color};
    height: 1em;
    width: 1em;
    float: left;
    margin-right: 8px;
  }
`;

const ScoreNumber = styled.span<{ color: any }>`
  display: inline-block;
  width: 1.5em;
  text-align: end;
  color: ${(props) => props.color};
`;

function Score({ category, score }: ScoreProps) {
  const { displayName, iconSrc, iconColor } = ScoreCategoryDetails[category];
  const normalizedScore = (score - 100) / 100; // normalized
  const scoreColor = rgb({
    r: 255 * (1 - normalizedScore),
    g: 255 * (1 + normalizedScore),
    b: 255 * (1 - Math.sqrt(Math.abs(normalizedScore))),
  });
  return (
    <span>
      <ScoreName src={iconSrc} color={iconColor}>
        {displayName}
      </ScoreName>
      &nbsp;
      <ScoreNumber color={scoreColor}>{score}</ScoreNumber>
    </span>
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

export interface UpdateScoreProps {
  category: ScoreCategory;
  amount: number;
}

const ScoreText = styled.p<{ color: string }>`
  color: ${(props) => props.color};
  font-weight: bold;
`;

export function AddScore({ category, amount }: UpdateScoreProps) {
  const addScore = useContext(ScoresContext)[1];
  useEffect(() => {
    addScore(category, amount);
  }, [addScore, category, amount]);
  const { displayName } = ScoreCategoryDetails[category];
  return (
    <ScoreText color={amount >= 0 ? "green" : "red"}>
      {amount > 0 && "+"}
      {amount} {displayName}
    </ScoreText>
  );
}
