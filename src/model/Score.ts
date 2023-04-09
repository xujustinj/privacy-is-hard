import { atomFamily } from "recoil";

export enum ScoreCategory {
  PRIVACY = "privacy",
  CAREER = "career",
  HEALTH = "health",
  SOCIAL = "social",
  HAPPINESS = "happiness",
}

export const scoreStateFamily = atomFamily({
  key: "scoreState",
  default: 100,
});
