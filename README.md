
# convert-region

A simple utility to convert region abbreviations to full names and vice-versa. Currently works with all 50 US states, and some Canadian regions. Over time the goal will be to add functionality for multiple continents and regions, and add types.

## Usage
To use, simply import the utility into your project.

`import convertRegion from 'convert-region'`

To convert abbreviations to full names use `convertRegion('CA')` which will turn `CA` to `California`. 

To convert full names to abbreviations use `convertRegion.toAbbr('California')` which will turn `California` to `CA.`

### Currently Available Regions
Below is a list of all the regions currently contained, with their accompanying abbreviations.
 
#### United States

    Alabama - AL  
    Alaska - AK  
    American Samoa - AS
    Arizona - AZ
    Arkansas - AR
    Armed Forces Americas - AA
    Armed Forces Europe - AE
    Armed Forces Pacific - AP
    California - CA
    Colorado - CO
    Connecticut - CT  
    Delaware - DE
    District Of Columbia - DC 
    Florida - FL
    Guam - GU
    Georgia - GA 
    Hawaii - HI 
    Idaho - ID 
    Illinois - IL 
    Indiana - IN 
    Iowa - IA 
    Kansas - KS
    Kentucky - KY 
    Louisiana - LA 
    Maine - ME
    Marshall Islands - MH 
    Maryland - MD 
    Massachusetts - MA  
    Michigan - MI
    Minnesota - MN 
    Mississippi - MS 
    Missouri - MO 
    Montana - MT 
    Nebraska - NE 
    Nevada - NV 
    New Hampshire - NH  
    New Jersey - NJ 
    New Mexico - NM
    New York - NY  
    North Carolina - NC  
    North Dakota - ND 
    Ohio - OH 
    Oklahoma - OK 
    Oregon - OR 
    Pennsylvania - PA
    Rhode Island - RI 
    South Carolina - SC 
    South Dakota - SD 
    Tennessee - TN 
    Texas - TX 
    Utah - UT
    Vermont - VT 
    Virginia - VA 
    Washington - WA 
    West Virginia - WV 
    Wisconsin - WS 
    Wyoming - WY

#### Canada

    Alberta - AB
    British Columbia - BC
    Manitoba - MB
    New Brunswick - NB
    Newfoundland - NF
    Northwest Territory - NT
    Nova Scotia - NS
    Nunavut - NU
    Ontario - ON
    Prince Edward Island - PE
    Quebec - QC
    Saskatchewan - SK
    Yukon - YT
