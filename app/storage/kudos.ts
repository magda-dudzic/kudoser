import data from '../data.json';
import { Kudos } from '../models/Kudos';
import { containsKey, getData, storeData } from '.';

// Get all kudos
export const getKudos = async (): Promise<Kudos[]> => {
  const kudos = await getData('kudos-data');
  return kudos;
};

// Initialise kudos if they are not existing
export const initKudos = async (): Promise<boolean> => {
  const hasKudos = await containsKey('kudos-data');
  if (!hasKudos) {
    await storeData('kudos-data', data);
    return true;
  }
  return false;
};

// Store kudos
export const storeKudos = async (newKudos: Kudos): Promise<boolean> => {
  const kudos = await getKudos();
  await storeData('kudos-data', [...kudos, newKudos]);
  return true;
};