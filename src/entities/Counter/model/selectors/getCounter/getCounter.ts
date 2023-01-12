import { StateSchema } from 'app/providers/StoreProvider';

const d = 's';

export const getCounter = (state: StateSchema) => state.counter;
