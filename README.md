# convert-region

A simple utility to convert region abbreviations to full names and vice-versa. Built with Typescript, and incredibly small.
  
## Story

I found myself building an application with location data being return from an existing API as abbreviations but, for presentation's sake, I needed full state names. I ended up writing a utility locally within my project, and ultimately decided to publish. Check out my website [if you want](https://jessewinton.dev).

## Usage

To use, install the package:

**PNPM (recommended)**

```bash
pnpm add convert-region
```

**NPM**

```bash
npm install convert-region
```

**Yarn**

```bash
yarn add convert-region
```

Then import it into your project:

```typescript
import { convertRegion } from 'convert-region';
```

### **toFullName**
To convert an abbreviation to a full name pass in an abbreviation from the list below:

```typescript
convertRegion.toFullName('NY'); // New York
```

which will return `New York`.  

### **toAbbreviation**
To convert a full name to an abbreviation pass in an name from the list below:

```typescript
convertRegion.toAbbreviation('New York'); // NY
```

which will return `NY`.  

### Currently Available Regions

This utility currently covers all of North America; more regions will be added in the future.

#### United States

| Name            | Abbreviation |
|-----------------|--------------|
| Alabama | AL |
| Alaska | AK |
| American Samoa | AS |
| Arizona | AZ |
| Arkansa | AR |
| Armed Forces Americas | AA|
| Armed Forces Europe | AE|
| Armed Forces Pacific | AP |
| California | CA|
| Colorado | CO|
| Connecticut | CT|
| Delaware | DE|
| District of Columbia | DC|
| Florida | FL|
| Guam | GU|
| Georgia | GA|
| Hawaii | HI|
| Idaho | ID|
| Illinois | IL|
| Indiana | IN|
| Iowa | IA |
| Kansas | KS |
| Kentucky | KY |
| Louisiana | LA |
| Maine | ME |
| Marshall Islands | MH |
| Maryland | MD |
| Massachusetts | MA |
| Michigan | MI |
| Minnesota | MN |
| Mississippi | MS |
| Missouri | MO |
| Montana | MT |
| Nebraska | NE |
| Nevada | NV |
| New Hampshire | NH |
| New Jersey | NJ |
| New Mexico | NM |
| New York | NY |
| North Carolina | NC |
| North Dakota | ND |
| Ohio | OH |
| Oklahoma | OK |
| Oregon | OR |
| Pennsylvania | PA |
| Rhode Island | RI |
| South Carolina | SC |
| South Dakota | SD |
| Tennessee | TN |
| Texas | TX |
| Utah | UT |
| Vermont | VT |
| Virginia | VA |
| Washington | WAS |
| West Virginia | WV |
| Wisconsin | WS |
| Wyoming | WY |
  

#### Canada
|Name| Abbreviation  |
|--|--|
| British Columbia | BC |
| Manitoba | MB |
| New Brunswick | NB |
| Newfoundland | NF |
| Northwest Territory | NT |
| Nova Scotia | NS |
| Nunavut | NU |
| Ontario | ON |
| Prince Edward Island | PE |
| Quebec | QC |
| Saskatchewan | SK |
| Yukon | YT |

  

#### Mexico
|Name | Abbreviation |
|--|--|
|Distrito Federal  |  DF|
| Aguascalientes | AGU |
| Baja California | BCN |
| Baja California Sur | BCS |
| Campeche | CAM |
| Chiapas | CHP |
| Chihuahua | CHH |
| Coahuila | COA |
| Colima | COL |
| Durango | DUR |
| Guanajuato | GUA |
| Guerrero | GRO |
| Hidalgo | HID |
| Jalisco | JAL |
| Michoacan | MIC |
| Morelos | MOR |
| Mexico | MEX |
| Nayarit | NAY |
| Nuevo Leon | NLE |
| Oaxaca | OAX |
| Puebla | PUE |
| Queretaro | QUE |
| Quintana Roo | ROO |
| San Luis Potosi | SLP |
| Sinaloa | SIN |
| Sonora | SON |
| Tabasco | TAB |
| Tamaulipas | TAM |
| Tlaxcala | TLA |
| Veracruz | VER |
| Yucatan | YUC |
| Zacatecas | ZAC |