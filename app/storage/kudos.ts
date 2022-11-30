import data from "../data.json";
import { Kudos } from "../models/Kudos";
import { containsKey, getData, removeItem, storeData } from ".";

// Get all kudos
export const getKudos = async (): Promise<Kudos[]> => {
  const kudos = await getData("kudos-data");
  return kudos;
};

// Initialise kudos if they are not existing
export const initKudos = async (): Promise<boolean> => {
  const hasKudos = await containsKey("kudos-data");
  if (!hasKudos) {
    await storeData("kudos-data", data);
    return true;
  }
  return false;
};

// Store kudos
export const storeKudos = async (newKudos: Kudos): Promise<boolean> => {
  const kudos = await getKudos();
  await storeData("kudos-data", [newKudos, ...kudos]);
  return true;
};

// Delete kudos by slug
export const deleteKudosBySlug = async (slug: string): Promise<boolean> => {
  const kudos = await getKudos();
  const newKudos = kudos.filter((kudositem) => kudositem.slug !== slug);
  await storeData("kudos-data", newKudos);
  return true;
};

// Remove kudos data
export const clearKudos = async () => {
  await removeItem("kudos-data");
};
