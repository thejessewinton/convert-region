# convert-region

A simple utility to convert region abbreviations to full names and vice-versa. Built with Typescript, and incredibly small.
  
## Story

I found myself building an application with location data being return from an existing API as abbreviations but, for presentation's sake, I needed full state names. I ended up writing a utility locally within my project, and ultimately decided to publish. Check out my website [if you want](https://jessewinton.dev).

## Usage

To use, install the package:

**pnpm (recommended)**

```bash
pnpm add convert-region
```

**npm**

```bash
npm install convert-region
```

**yarn**

```bash
yarn add convert-region
```

Then import it into your project:

```typescript
import { convertRegion } from 'convert-region';
```

From there, pass in the full name or abbreviation of one of the regions below and it will return the match. For example:

```typescript
convertRegion('NY');
```

will return `New York`, and:

```typescript
convertRegion('New York');
```

will return `NY`.

## Types

While the `convertRegion` function accepts any string value, this newest version exports a type for the regions, and a union type for validating possible input. You can import them like so:

```typescript
import type { RegionInput, Regions } from 'convert-region';
```

And use them to validate your input.

```typescript
const region: RegionInput = 'NY';
```
