const US_STATES: RegionProperties[] = [
  { name: 'Alabama', abbreviation: 'AL' },
  { name: 'Alaska', abbreviation: 'AK' },
  { name: 'American Samoa', abbreviation: 'AS' },
  { name: 'Arizona', abbreviation: 'AZ' },
  { name: 'Arkansas', abbreviation: 'AR' },
  { name: 'Armed Forces Americas', abbreviation: 'AA' },
  { name: 'Armed Forces Europe', abbreviation: 'AE' },
  { name: 'Armed Forces Pacific', abbreviation: 'AP' },
  { name: 'California', abbreviation: 'CA' },
  { name: 'Colorado', abbreviation: 'CO' },
  { name: 'Connecticut', abbreviation: 'CT' },
  { name: 'Delaware', abbreviation: 'DE' },
  { name: 'District Of Columbia', abbreviation: 'DC' },
  { name: 'Florida', abbreviation: 'FL' },
  { name: 'Georgia', abbreviation: 'GA' },
  { name: 'Guam', abbreviation: 'GU' },
  { name: 'Hawaii', abbreviation: 'HI' },
  { name: 'Idaho', abbreviation: 'ID' },
  { name: 'Illinois', abbreviation: 'IL' },
  { name: 'Indiana', abbreviation: 'IN' },
  { name: 'Iowa', abbreviation: 'IA' },
  { name: 'Kansas', abbreviation: 'KS' },
  { name: 'Kentucky', abbreviation: 'KY' },
  { name: 'Louisiana', abbreviation: 'LA' },
  { name: 'Maine', abbreviation: 'ME' },
  { name: 'Marshall Islands', abbreviation: 'MH' },
  { name: 'Maryland', abbreviation: 'MD' },
  { name: 'Massachusetts', abbreviation: 'MA' },
  { name: 'Michigan', abbreviation: 'MI' },
  { name: 'Minnesota', abbreviation: 'MN' },
  { name: 'Mississippi', abbreviation: 'MS' },
  { name: 'Missouri', abbreviation: 'MO' },
  { name: 'Montana', abbreviation: 'MT' },
  { name: 'Nebraska', abbreviation: 'NE' },
  { name: 'Nevada', abbreviation: 'NV' },
  { name: 'New Hampshire', abbreviation: 'NH' },
  { name: 'New Jersey', abbreviation: 'NJ' },
  { name: 'New Mexico', abbreviation: 'NM' },
  { name: 'New York', abbreviation: 'NY' },
  { name: 'North Carolina', abbreviation: 'NC' },
  { name: 'North Dakota', abbreviation: 'ND' },
  { name: 'Northern Mariana Islands', abbreviation: 'NP' },
  { name: 'Ohio', abbreviation: 'OH' },
  { name: 'Oklahoma', abbreviation: 'OK' },
  { name: 'Oregon', abbreviation: 'OR' },
  { name: 'Pennsylvania', abbreviation: 'PA' },
  { name: 'Puerto Rico', abbreviation: 'PR' },
  { name: 'Rhode Island', abbreviation: 'RI' },
  { name: 'South Carolina', abbreviation: 'SC' },
  { name: 'South Dakota', abbreviation: 'SD' },
  { name: 'Tennessee', abbreviation: 'TN' },
  { name: 'Texas', abbreviation: 'TX' },
  { name: 'US Virgin Islands', abbreviation: 'VI' },
  { name: 'Utah', abbreviation: 'UT' },
  { name: 'Vermont', abbreviation: 'VT' },
  { name: 'Virginia', abbreviation: 'VA' },
  { name: 'Washington', abbreviation: 'WA' },
  { name: 'West Virginia', abbreviation: 'WV' },
  { name: 'Wisconsin', abbreviation: 'WI' },
  { name: 'Wyoming', abbreviation: 'WY' },
];

const CANADIAN_PROVINCES: RegionProperties[] = [
  { name: 'Alberta', abbreviation: 'AB' },
  { name: 'British Columbia', abbreviation: 'BC' },
  { name: 'Manitoba', abbreviation: 'MB' },
  { name: 'New Brunswick', abbreviation: 'NB' },
  { name: 'Newfoundland', abbreviation: 'NF' },
  { name: 'Northwest Territory', abbreviation: 'NT' },
  { name: 'Nova Scotia', abbreviation: 'NS' },
  { name: 'Nunavut', abbreviation: 'NU' },
  { name: 'Ontario', abbreviation: 'ON' },
  { name: 'Prince Edward Island', abbreviation: 'PE' },
  { name: 'Quebec', abbreviation: 'QC' },
  { name: 'Saskatchewan', abbreviation: 'SK' },
  { name: 'Yukon', abbreviation: 'YT' },
];

const MEXICAN_STATES: RegionProperties[] = [
  {
    name: 'Distrito Federal',
    abbreviation: 'DIF',
  },
  {
    name: 'Aguascalientes',
    abbreviation: 'AGU',
  },
  {
    name: 'Baja California',
    abbreviation: 'BCN',
  },
  {
    name: 'Baja California Sur',
    abbreviation: 'BCS',
  },
  {
    name: 'Campeche',
    abbreviation: 'CAM',
  },
  {
    name: 'Chiapas',
    abbreviation: 'CHP',
  },
  {
    name: 'Chihuahua',
    abbreviation: 'CHH',
  },
  {
    name: 'Coahuila',
    abbreviation: 'COA',
  },
  {
    name: 'Colima',
    abbreviation: 'COL',
  },
  {
    name: 'Durango',
    abbreviation: 'DUR',
  },
  {
    name: 'Guanajuato',
    abbreviation: 'GUA',
  },
  {
    name: 'Guerrero',
    abbreviation: 'GRO',
  },
  {
    name: 'Hidalgo',
    abbreviation: 'HID',
  },
  {
    name: 'Jalisco',
    abbreviation: 'JAL',
  },
  {
    name: 'Michoacán',
    abbreviation: 'MIC',
  },
  {
    name: 'Morelos',
    abbreviation: 'MOR',
  },
  {
    name: 'México',
    abbreviation: 'MEX',
  },
  {
    name: 'Nayarit',
    abbreviation: 'NAY',
  },
  {
    name: 'Nuevo León',
    abbreviation: 'NLE',
  },
  {
    name: 'Oaxaca',
    abbreviation: 'OAX',
  },
  {
    name: 'Puebla',
    abbreviation: 'PUE',
  },
  {
    name: 'Querétaro',
    abbreviation: 'QUE',
  },
  {
    name: 'Quintana Roo',
    abbreviation: 'ROO',
  },
  {
    name: 'San Luis Potosí',
    abbreviation: 'SLP',
  },
  {
    name: 'Sinaloa',
    abbreviation: 'SIN',
  },
  {
    name: 'Sonora',
    abbreviation: 'SON',
  },
  {
    name: 'Tabasco',
    abbreviation: 'TAB',
  },
  {
    name: 'Tamaulipas',
    abbreviation: 'TAM',
  },
  {
    name: 'Tlaxcala',
    abbreviation: 'TLA',
  },
  {
    name: 'Veracruz',
    abbreviation: 'VER',
  },
  {
    name: 'Yucatán',
    abbreviation: 'YUC',
  },
  {
    name: 'Zacatecas',
    abbreviation: 'ZAC',
  },
];

export const regions = [...US_STATES, ...CANADIAN_PROVINCES, ...MEXICAN_STATES];
