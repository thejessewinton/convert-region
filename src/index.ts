import { regions } from './data/regions';

const converter = () => {
  const toFullName = (input: string) => {
    const match = regions.find((region: RegionProperties) => {
      return region.abbreviation === input;
    });

    return match?.name;
  };

  const toAbbreviation = (input: string) => {
    const match = regions.find((region: RegionProperties) => {
      return region.name === input;
    });

    return match?.abbreviation;
  };

  return {
    toFullName,
    toAbbreviation,
  };
};

export const convertRegion = converter();
