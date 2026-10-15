const BASE_PATH = "/images/covers/animes";

interface Anime {
  src: string;
  alt: string;
  title: string;
}

export const animes: Anime[] = [
  {
    src: `${BASE_PATH}/vinland_saga.webp`,
    alt: "Vinland Saga",
    title: "Vinland Saga",
  },
  {
    src: `${BASE_PATH}/berserk.webp`,
    alt: "Berserk",
    title: "Berserk",
  },
  {
    src: `${BASE_PATH}/hellsing.webp`,
    alt: "Hellsing",
    title: "Hellsing",
  },
  {
    src: `${BASE_PATH}/fullmetal_alchemist.webp`,
    alt: "Fullmetal Alchemist Brotherhood",
    title: "Fullmetal Alchemist: Brotherhood",
  },
  {
    src: `${BASE_PATH}/hunter_x_hunter.webp`,
    alt: "Hunter X Hunter",
    title: "Hunter X Hunter",
  },
  { src: `${BASE_PATH}/bleach.webp`, alt: "Bleach", title: "Bleach" },
];
