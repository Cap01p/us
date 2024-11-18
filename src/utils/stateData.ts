export interface StateUIData {
  name: string;
  rateRange: {
    min: number;
    max: number;
  };
  wageBase: number;
  newEmployerRate: number;
}

export const stateUIData: Record<string, StateUIData> = {
  AL: {
    name: "Alabama",
    rateRange: { min: 0.2, max: 5.4 },
    wageBase: 8000,
    newEmployerRate: 2.7
  },
  AK: {
    name: "Alaska",
    rateRange: { min: 1.0, max: 5.4 },
    wageBase: 49700,
    newEmployerRate: 1.9
  },
  AZ: {
    name: "Arizona",
    rateRange: { min: 0.05, max: 14.03 },
    wageBase: 8000,
    newEmployerRate: 2.0
  },
  AR: {
    name: "Arkansas",
    rateRange: { min: 0.225, max: 10.125 },
    wageBase: 7000,
    newEmployerRate: 2.9
  },
  CA: {
    name: "California",
    rateRange: { min: 1.5, max: 6.2 },
    wageBase: 7000,
    newEmployerRate: 3.4
  },
  CO: {
    name: "Colorado",
    rateRange: { min: 0.81, max: 12.34 },
    wageBase: 23800,
    newEmployerRate: 1.7
  },
  CT: {
    name: "Connecticut",
    rateRange: { min: 1.7, max: 6.6 },
    wageBase: 25000,
    newEmployerRate: 3.0
  },
  DE: {
    name: "Delaware",
    rateRange: { min: 0.3, max: 8.2 },
    wageBase: 10500,
    newEmployerRate: 2.3
  },
  FL: {
    name: "Florida",
    rateRange: { min: 0.1, max: 5.4 },
    wageBase: 7000,
    newEmployerRate: 2.7
  },
  GA: {
    name: "Georgia",
    rateRange: { min: 0.04, max: 8.1 },
    wageBase: 9500,
    newEmployerRate: 2.7
  },
  HI: {
    name: "Hawaii",
    rateRange: { min: 1.2, max: 5.4 },
    wageBase: 51600,
    newEmployerRate: 3.0
  },
  ID: {
    name: "Idaho",
    rateRange: { min: 0.33, max: 5.4 },
    wageBase: 49900,
    newEmployerRate: 1.0
  },
  IL: {
    name: "Illinois",
    rateRange: { min: 0.2, max: 6.4 },
    wageBase: 13271,
    newEmployerRate: 3.7
  },
  IN: {
    name: "Indiana",
    rateRange: { min: 0.5, max: 7.4 },
    wageBase: 9500,
    newEmployerRate: 2.5
  },
  IA: {
    name: "Iowa",
    rateRange: { min: 0, max: 7.0 },
    wageBase: 36100,
    newEmployerRate: 1.0
  },
  KS: {
    name: "Kansas",
    rateRange: { min: 0.2, max: 7.6 },
    wageBase: 14000,
    newEmployerRate: 2.7
  },
  KY: {
    name: "Kentucky",
    rateRange: { min: 0.3, max: 9.0 },
    wageBase: 10800,
    newEmployerRate: 2.7
  },
  LA: {
    name: "Louisiana",
    rateRange: { min: 0.1, max: 6.2 },
    wageBase: 7700,
    newEmployerRate: 1.0
  },
  ME: {
    name: "Maine",
    rateRange: { min: 0.47, max: 5.4 },
    wageBase: 12000,
    newEmployerRate: 2.6
  },
  MD: {
    name: "Maryland",
    rateRange: { min: 0.3, max: 7.5 },
    wageBase: 8500,
    newEmployerRate: 2.6
  },
  MA: {
    name: "Massachusetts",
    rateRange: { min: 0.94, max: 14.37 },
    wageBase: 15000,
    newEmployerRate: 2.42
  },
  MI: {
    name: "Michigan",
    rateRange: { min: 0.06, max: 10.3 },
    wageBase: 9500,
    newEmployerRate: 2.7
  },
  MN: {
    name: "Minnesota",
    rateRange: { min: 0.2, max: 9.1 },
    wageBase: 40000,
    newEmployerRate: 1.0
  },
  MS: {
    name: "Mississippi",
    rateRange: { min: 0.2, max: 5.4 },
    wageBase: 14000,
    newEmployerRate: 1.2
  },
  MO: {
    name: "Missouri",
    rateRange: { min: 0.1, max: 5.4 },
    wageBase: 12000,
    newEmployerRate: 2.376
  },
  MT: {
    name: "Montana",
    rateRange: { min: 0.13, max: 6.12 },
    wageBase: 40500,
    newEmployerRate: 1.2
  },
  NE: {
    name: "Nebraska",
    rateRange: { min: 0, max: 5.4 },
    wageBase: 10000,
    newEmployerRate: 1.25
  },
  NV: {
    name: "Nevada",
    rateRange: { min: 0.25, max: 5.4 },
    wageBase: 41800,
    newEmployerRate: 2.95
  },
  NH: {
    name: "New Hampshire",
    rateRange: { min: 0.1, max: 7.5 },
    wageBase: 14000,
    newEmployerRate: 1.7
  },
  NJ: {
    name: "New Jersey",
    rateRange: { min: 0.3, max: 7.2 },
    wageBase: 43000,
    newEmployerRate: 2.8
  },
  NM: {
    name: "New Mexico",
    rateRange: { min: 0.3, max: 5.4 },
    wageBase: 27800,
    newEmployerRate: 1.0
  },
  NY: {
    name: "New York",
    rateRange: { min: 2.1, max: 9.9 },
    wageBase: 12300,
    newEmployerRate: 4.1
  },
  NC: {
    name: "North Carolina",
    rateRange: { min: 0.06, max: 5.76 },
    wageBase: 27700,
    newEmployerRate: 1.0
  },
  ND: {
    name: "North Dakota",
    rateRange: { min: 0.08, max: 9.68 },
    wageBase: 38800,
    newEmployerRate: 1.09
  },
  OH: {
    name: "Ohio",
    rateRange: { min: 0.3, max: 10.6 },
    wageBase: 10500,
    newEmployerRate: 2.7
  },
  OK: {
    name: "Oklahoma",
    rateRange: { min: 0.3, max: 9.2 },
    wageBase: 20000,
    newEmployerRate: 1.5
  },
  OR: {
    name: "Oregon",
    rateRange: { min: 0.9, max: 5.4 },
    wageBase: 55000,
    newEmployerRate: 2.1
  },
  PA: {
    name: "Pennsylvania",
    rateRange: { min: 0.5, max: 10.99 },
    wageBase: 10000,
    newEmployerRate: 3.7
  },
  RI: {
    name: "Rhode Island",
    rateRange: { min: 0.99, max: 9.79 },
    wageBase: 30200,
    newEmployerRate: 2.0
  },
  SC: {
    name: "South Carolina",
    rateRange: { min: 0.06, max: 5.46 },
    wageBase: 14000,
    newEmployerRate: 0.5
  },
  SD: {
    name: "South Dakota",
    rateRange: { min: 0, max: 9.0 },
    wageBase: 16000,
    newEmployerRate: 1.2
  },
  TN: {
    name: "Tennessee",
    rateRange: { min: 0.01, max: 10.0 },
    wageBase: 7000,
    newEmployerRate: 2.7
  },
  TX: {
    name: "Texas",
    rateRange: { min: 0.23, max: 7.5 },
    wageBase: 9000,
    newEmployerRate: 2.7
  },
  UT: {
    name: "Utah",
    rateRange: { min: 0.2, max: 7.2 },
    wageBase: 44800,
    newEmployerRate: 1.0
  },
  VT: {
    name: "Vermont",
    rateRange: { min: 0.6, max: 6.6 },
    wageBase: 19500,
    newEmployerRate: 1.0
  },
  VA: {
    name: "Virginia",
    rateRange: { min: 0.1, max: 5.4 },
    wageBase: 8000,
    newEmployerRate: 2.5
  },
  WA: {
    name: "Washington",
    rateRange: { min: 0.27, max: 6.03 },
    wageBase: 72800,
    newEmployerRate: 2.7
  },
  WV: {
    name: "West Virginia",
    rateRange: { min: 1.5, max: 8.5 },
    wageBase: 12000,
    newEmployerRate: 2.7
  },
  WI: {
    name: "Wisconsin",
    rateRange: { min: 0, max: 12.0 },
    wageBase: 14000,
    newEmployerRate: 2.3
  },
  WY: {
    name: "Wyoming",
    rateRange: { min: 0.1, max: 8.5 },
    wageBase: 27900,
    newEmployerRate: 1.7
  }
};

export const getStateRate = (stateCode: string): StateUIData | undefined => {
  return stateUIData[stateCode];
};

export const calculateSUTA = (
  stateCode: string,
  employees: number,
  avgWage: number
): number => {
  const stateData = stateUIData[stateCode];
  if (!stateData) return 0;

  const taxableWage = Math.min(avgWage, stateData.wageBase);
  return employees * taxableWage * (stateData.newEmployerRate / 100);
};

export const calculateFUTA = (employees: number): number => {
  const FUTA_WAGE_BASE = 7000;
  const FUTA_RATE = 0.006; // 0.6%
  return employees * FUTA_WAGE_BASE * FUTA_RATE;
};

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount);
}; 