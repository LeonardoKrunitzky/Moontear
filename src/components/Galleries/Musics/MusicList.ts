const BASE_PATH = "/images/musics";

export type Music = {
  img: string;
  title: string;
};

export const musics: Music[] = [
  { img: `${BASE_PATH}/powerwolf.jpg`, title: "Powerwolf" },
  { img: `${BASE_PATH}/pierce_the_veil.jpg`, title: "Pierce the Veil" },
  { img: `${BASE_PATH}/evanescence.jpg`, title: "Evanescence" },
  { img: `${BASE_PATH}/linkin_park.jpg`, title: "Linkin Park" },
  {
    img: `${BASE_PATH}/my_chemical_romance.jpg`,
    title: "My Chemical Romance",
  },
  { img: `${BASE_PATH}/system_of_a_down.jpg`, title: "System of a Down" },
  { img: `${BASE_PATH}/limp_bizkit.jpg`, title: "Limp Bizkit" },
  { img: `${BASE_PATH}/elena_siegman.jpg`, title: "Elena Siegman" },
  { img: `${BASE_PATH}/ozzy_osbourne.jpg`, title: "Ozzy Osbourne" },
  { img: `${BASE_PATH}/freddie_dredd.jpg`, title: "Freddie Dredd" },
  { img: `${BASE_PATH}/yung_lixo.jpg`, title: "Yung Lixo" },
  { img: `${BASE_PATH}/alice_in_chains.jpg`, title: "Alice in Chains" },
  {
    img: `${BASE_PATH}/rage_against_the_machine.jpg`,
    title: "Rage Against the Machine",
  },
  {
    img: `${BASE_PATH}/bullet_for_my_valentine.jpg`,
    title: "Bullet for My Valentine",
  },
];