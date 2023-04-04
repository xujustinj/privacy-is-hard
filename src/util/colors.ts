export interface RGB {
  readonly r: number;
  readonly g: number;
  readonly b: number;
}

export interface RGBA extends RGB {
  readonly a: number;
}

export function rgb({ r, g, b }: RGB): string {
  return `rgb(${r}, ${g}, ${b})`;
}

export function rgba({ r, g, b, a }: RGBA): string {
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

export function withAlpha(rgb: RGB, a: number): RGBA {
  return { ...rgb, a };
}

export const Colors = {
  sectionBackground: { r: 0, g: 0, b: 0, a: 0.6 },
  sunset: { r: 254, g: 200, b: 126 },
  princetonOrange: { r: 254, g: 157, b: 50 },
  redwood: { r: 170, g: 99, b: 91 },
  cerulean: { r: 53, g: 117, b: 142 },
  gunmetal: { r: 26, g: 37, b: 44 },
  drabDarkBrown: { r: 72, g: 70, b: 34 },
} as const;
