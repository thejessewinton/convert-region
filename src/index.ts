import { regions } from './data/regions';

type RegionType = (typeof regions)[number];

const removeAccent = (input: string) => {
  return input.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
};

const converter = () => {
  const toFullName = (input: string) => {
    const match = regions.find((region: RegionType) => {
      return region.abbreviation.toLowerCase() === removeAccent(input).toLowerCase();
    });

    return match?.name;
  };

  const toAbbreviation = (input: string) => {
    const match = regions.find((region: RegionType) => {
      return region.name.toLowerCase() === removeAccent(input).toLowerCase();
    });

    return match?.abbreviation;
  };

  return {
    toFullName,
    toAbbreviation,
  };
};

export const convertRegion = converter();
