export const getRandomCharactersIds = (length: number, count: number) =>
  Array.from({ length }, () => Math.floor(Math.random() * count));
