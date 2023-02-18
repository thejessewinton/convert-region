# convert-region

## 2.0.0

### Major Changes

- # What changed?

  I removed the `toName` and `toAbbr` methods, opting instead for a one-liner that can accept any value. This is a breaking change, but I think it's worth it. I also exported types for the inputs, in case anyone wants to more strongly type their inputs. The function accepts any string, so it will not be opinionated about how it's receving the input from an API or database, but you can use the types to make sure you're passing the right thing.

  # Why?

  Significantly cleaner API, and better type support.

  # How to upgrade?

  If you're using the `toName` or `toAbbr` methods, you'll need to change your code to use the `convertRegion` function instead. The function accepts the same arguments, but it's a one-liner instead of a method chain. If you're using TypeScript, you can use the `RegionInput` type if you'd like.

## 1.2.1

### Patch Changes

- 305a865: Updating tests, README, and normalization function.

## 1.2.0

### Minor Changes

- 401a4d4: Updating build pipeline, and creating better matching for arguments.
