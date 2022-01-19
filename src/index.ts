import { regions } from './data/regions';

const converter = () => {
  const toFullName = (input: string) => {
    const match = regions.find((region: string[]) => {
      return region[1] === input;
    });

    return match![0];
  };

  const toAbbreviation = (input: string) => {
    const match = regions.find((region: string[]) => {
      return region[0] === input;
    });

    return match![1];
  };

  return {
    toFullName,
    toAbbreviation,
  };
};

export const convertRegion = converter();
