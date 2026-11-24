export const rubicGroups = [
  { id: 'klubb', name: 'Seilforeningen', token: '47373' },
  { id: 'jolle', name: 'Jolle', token: '47678' },
  { id: 'ladies', name: 'Ladies Sailing', token: '47681' },
  { id: 'sportsbat', name: 'Sportsbåt', token: '47680' },
  { id: 'kjolbat', name: 'Kjølbåt', token: '47679' },
];

export type RubicGroup = (typeof rubicGroups)[number];
