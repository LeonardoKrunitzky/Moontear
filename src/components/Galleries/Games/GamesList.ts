import { Platform } from "./PlataformIcons";

interface Game{
  src: string;
  alt: string;
  title: string;
  platform: Platform;
  showHeader?: boolean;
}

const BASE_PATH = "/images/covers/games";

export const games: Game[] = [
  {
    src: `${BASE_PATH}/death_stranding.jpg`,
    alt: "Death Stranding",
    title: "Death Stranding 2: On the beach",
    platform: "PS5",
  },
  {
    src: `${BASE_PATH}/clair_obscur.jpg`,
    alt: "Clair Obscur",
    title: "Clair Obscur: Expedition 33",
    platform: "PS5",
  },
  {
    src: `${BASE_PATH}/bloodborne.jpg`,
    alt: "Bloodborne",
    title: "Bloodborne",
    platform: "PS4",
  },
  {
    src: `${BASE_PATH}/persona_3.jpg`,
    alt: "Persona 3",
    title: "Persona 3",
    platform: "PS5",
  },
  {
    src: `${BASE_PATH}/persona_4.jpg`,
    alt: "Persona 4",
    title: "Persona 4",
    platform: "STEAM",
    showHeader: true,
  },
  {
    src: `${BASE_PATH}/persona_5.jpg`,
    alt: "Persona 5",
    title: "Persona 5",
    platform: "PS5",
  },
  {
    src: `${BASE_PATH}/metaphor.jpg`,
    alt: "Metaphor",
    title: "Metaphor ReFantazio",
    platform: "PS5",
  },
  {
    src: `${BASE_PATH}/resident_evil_4.jpg`,
    alt: "Resident Evil 4",
    title: "Resident Evil 4",
    platform: "PS2",
  },
  {
    src: `${BASE_PATH}/metal_gear_solid.jpg`,
    alt: "Metal Gear Solid",
    title: "Metal Gear Solid",
    platform: "PS1",
  },
  {
    src: `${BASE_PATH}/metal_gear_solid_2.jpg`,
    alt: "Metal Gear Solid 2",
    title: "Metal Gear Solid 2",
    platform: "PS2",
  },
  {
    src: `${BASE_PATH}/metal_gear_solid_3.jpg`,
    alt: "Metal Gear Solid 3",
    title: "Metal Gear Solid 3",
    platform: "PS2",
  },
  {
    src: `${BASE_PATH}/metal_gear_rising.jpg`,
    alt: "Metal Gear Rising",
    title: "Metal Gear Rising: Revengeance",
    platform: "PS3",
  },
  {
    src: `${BASE_PATH}/destiny.jpg`,
    alt: "Destiny",
    title: "Destiny",
    platform: "PS4",
  },
  {
    src: `${BASE_PATH}/bioshock.jpg`,
    alt: "Bioshock",
    title: "Bioshock",
    platform: "PS4",
  },
  {
    src: `${BASE_PATH}/fallout_new_vegas.jpg`,
    alt: "Fallout New Vegas",
    title: "Fallout New Vegas",
    platform: "STEAM",
    showHeader: true,
  },
  {
    src: `${BASE_PATH}/silent_hill_2.jpg`,
    alt: "Silent Hill 2",
    title: "Silent Hill 2",
    platform: "PS5",
  },
  {
    src: `${BASE_PATH}/silent_hill_3.jpg`,
    alt: "Silent Hill 3",
    title: "Silent Hill 3",
    platform: "STEAM",
    showHeader: true,
  },
];