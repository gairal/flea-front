import { Directus } from '@directus/sdk';

import { Collections } from '~/src/app/types';

export interface DirectusContextState {
  client: Directus<Collections>;
}
