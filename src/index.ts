import { regions } from './data/regions';

const converter = () => {
  const toFullName = (input: string) => {
    const match = regions.find((region: typeof regions[number]) => {
      return region.abbreviation.toLowerCase().normalize() === input.toLowerCase().normalize();
    });

    return match?.name;
  };

  const toAbbreviation = (input: string) => {
    const match = regions.find((region: typeof regions[number]) => {
      return region.name.toLowerCase().normalize() === input.toLowerCase().normalize();
    });

    return match?.abbreviation;
  };

  return {
    toFullName,
    toAbbreviation,
  };
};

export const convertRegion = converter();
