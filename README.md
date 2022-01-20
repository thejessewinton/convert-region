
# convert-region

A simple utility to convert region abbreviations to full names and vice-versa. Built with Typescript.

## Story

I found myself building an application with location data being return from an existing API as abbreviations but, for presentation's sake I needed full names. I wrote a utility locally within my project, and ultimately decided to publish.

## Usage
To use, simply import the utility into your project.

`import convertRegion from 'convert-region'`

To convert abbreviations to full names use `convertRegion.toFullName('NY')` which will turn `NY` to `New York`. 

To convert full names to abbreviations use `convertRegion.toAbbreviation('New York')` which will turn `New York` to `NY.`

### Currently Available Regions
This utility currently covers all of North America; more regions will be added in the future.
 
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

#### Mexico

    Distrito Federal - DIF
    Aguascalientes - AGU
    Baja California - BCN
    Baja California Sur - BCS
    Campeche - CAM 
    Chiapas - CHP 
    Chihuahua - CHH 
    Coahuila - COA 
    Colima - COL
    Durango - DUR
    Guanajuato - GUA
    Guerrero - GRO
    Hidalgo - HID
    Jalisco - JAL 
    Michoacán - MIC
    Morelos - MOR
    México - MEX 
    Nayarit - NAY
    Nuevo León - NLE
    Oaxaca - OAX
    Puebla - PUE
    Querétaro - QUE
    Quintana Roo - ROO 
    San Luis Potosí - SLP
    Sinaloa - SIN
    Sonora - SON
    Tabasco - TAB
    Tamaulipas - TAM
    Tlaxcala - TLA
    Veracruz - VER
    Yucatán - YUC
    Zacatecas - ZAC 