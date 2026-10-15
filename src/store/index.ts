import { createStoreon } from 'storeon';

import { type Events, themer, type State } from './themer';

export const store = createStoreon<State, Events>([themer]);
