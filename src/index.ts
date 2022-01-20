import { regions } from './data/regions';

const converter = () => {
  const toFullName = (input: string) => {
    if (typeof input !== 'string') {
      throw new Error('toFullName expects a string argument. ');
    }

    const match = regions.find((region: RegionProperties) => {
      return region.abbreviation === input;
    });

    return match?.name;
  };

  const toAbbreviation = (input: string) => {
    if (typeof input !== 'string') {
      throw new Error('toAbbreviation expects a string argument. ');
    }

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
