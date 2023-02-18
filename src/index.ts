import { regions } from './data/regions';

export type RegionType = typeof regions;
export type RegionInputType = keyof RegionType | (typeof regions)[keyof RegionType];

const removeAccent = (input: string) => {
  return input.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
};

export const convertRegion = (input: string) => {
  const cleanInput = removeAccent(input).toLowerCase();

  const regionAbbreviations = Object.keys(regions);
  const regionNames = Object.values(regions);

  const normalizedAbbreviations = regionAbbreviations.map((key) => removeAccent(key).toLowerCase());
  const normalizedNames = regionNames.map((value) => removeAccent(value).toLowerCase());

  if (normalizedAbbreviations.includes(cleanInput)) {
    // return the matching name
    return regionNames[normalizedAbbreviations.indexOf(cleanInput)];
  }

  if (normalizedNames.includes(cleanInput)) {
    // return the matching abbreviation
    return regionAbbreviations[normalizedNames.indexOf(cleanInput)];
  }
};
