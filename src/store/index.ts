import { createStoreon } from 'storeon';

import { themer } from './themer';
import { localization } from './localization';

export const store = createStoreon<any, any>([themer, localization]);
