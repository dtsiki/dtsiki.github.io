import { getAngleBrackets } from '~utils/formatting';
import { UTILITY_TYPE, type TUtilityType } from './UtilityTypes.types';
import { InlineCode } from '~components/blog';

export const UTILITY_TYPE_CONFIG = {
  [UTILITY_TYPE.PARTIAL]: ['T'],
  [UTILITY_TYPE.REQUIRED]: ['T'],
  [UTILITY_TYPE.READONLY]: ['T'],
  [UTILITY_TYPE.OMIT]: ['T', 'K'],
  [UTILITY_TYPE.PICK]: ['T', 'K'],
  [UTILITY_TYPE.RECORD]: ['K', 'T'],
  [UTILITY_TYPE.EXCLUDE]: ['T', 'U'],
  [UTILITY_TYPE.EXTRACT]: ['T', 'U'],
  [UTILITY_TYPE.NONNULLABLE]: ['T'],
  [UTILITY_TYPE.PARAMETERS]: ['T'],
  [UTILITY_TYPE.RETURNTYPE]: ['T'],
  [UTILITY_TYPE.CONSTRUCTORPARAMETERS]: ['T'],
  [UTILITY_TYPE.INSTANCETYPE]: ['T'],
  [UTILITY_TYPE.AWAITED]: ['Promise'],
};

export const renderTypeName = (utilityType: TUtilityType) => {
  return <InlineCode>{utilityType}</InlineCode>;
};

export const renderType = (utilityType: TUtilityType) => {
  const params = UTILITY_TYPE_CONFIG[utilityType].join(', ');

  return (
    <InlineCode>
      {utilityType}
      {getAngleBrackets(params)}
    </InlineCode>
  );
};
