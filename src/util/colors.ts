export interface RGB {
  readonly r: number;
  readonly g: number;
  readonly b: number;
}

export interface RGBA extends RGB {
  readonly a: number;
}

const RGB_MAX = 255;

export function rgb({ r, g, b }: RGB): string {
  return `rgb(${RGB_MAX * r}, ${RGB_MAX * g}, ${RGB_MAX * b})`;
}

export function rgba({ r, g, b, a }: RGBA): string {
  return `rgba(${RGB_MAX * r}, ${RGB_MAX * g}, ${RGB_MAX * b}, ${a})`;
}

export const Colors = {
  sectionBackground: rgba({ r: 0.0, g: 0.0, b: 0.0, a: 0.6 }),
} as const;
