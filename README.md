# convert-region
 A simple utility to convert region abbreviations to full names and vice-versa. 

 This package currently works with all 50 US states, and some Canadian regions. Over time the goal will be to add functionality for multiple continents and regions.

 To use, simply import the utility into your project:

 `import convertRegion from 'convert-region'`

To convert abbreviations to full names use:

`convertRegion('CA')`

Which will turn `CA` to `California`. To convert full names to abbreviations use:

`convertRegion.toAbbr('California')`

which will turn `California` to `CA.`
