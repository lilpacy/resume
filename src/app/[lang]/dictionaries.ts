import "server-only";

export const dictionaries = {
  ja: () => import("@/dictionaries/ja.json").then((module) => module.default),
  en: () => import("@/dictionaries/en.json").then((module) => module.default),
};

export type Language = keyof typeof dictionaries;

export const getDictionary = async (locale: keyof typeof dictionaries) =>
  dictionaries[locale]();
