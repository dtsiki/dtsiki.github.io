export const UTILITY_TYPE = {
  PARTIAL: 'Partial',
  REQUIRED: 'Required',
  READONLY: 'Readonly',
  OMIT: 'Omit',
  PICK: 'Pick',
  RECORD: 'Record',
  EXCLUDE: 'Exclude',
  EXTRACT: 'Extract',
  NONNULLABLE: 'NonNullable',
  PARAMETERS: 'Parameters',
  RETURNTYPE: 'ReturnType',
  CONSTRUCTORPARAMETERS: 'ConstructorParameters',
  INSTANCETYPE: 'InstanceType',
  AWAITED: 'Awaited',
} as const;

export type TUtilityType = typeof UTILITY_TYPE[keyof typeof UTILITY_TYPE];
