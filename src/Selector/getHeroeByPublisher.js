import { heroes } from "../data/heroes";

export const getHeroeByPublisher = (publisher) => {
  const ValidPublishers = ["DC Comics", "Marvel Comics"];
  if (!ValidPublishers.includes(publisher)) {
    throw new Error(`publisher "${publisher}" no es correcto`);
  }
  return heroes.filter((hero) => hero.publisher === publisher);
};
