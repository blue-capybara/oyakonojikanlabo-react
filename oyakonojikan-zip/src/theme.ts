export const themes = {
  default: { primary: 'brand-red', secondary: 'yellow-400' },
  pico: { primary: 'brand-orange', secondary: 'amber-300' },
  culture: { primary: 'brand-teal', secondary: 'amber-200' },
} as const;

export type ThemeKey = keyof typeof themes;