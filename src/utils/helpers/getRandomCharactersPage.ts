const PAGES = {
  start: 1,
  end: 10
};

export const getRandomCharactersPage = () =>
  Math.floor(Math.random() * (PAGES.end - PAGES.start) + PAGES.start);
