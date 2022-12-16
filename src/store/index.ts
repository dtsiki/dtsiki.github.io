import { createStoreon } from 'storeon';

import { Events, themer, State } from './themer';

export const store = createStoreon<State, Events>([themer]);
