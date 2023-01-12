import { StateSchema } from 'app/providers/StoreProvider';

const a = 2;

export const getCounter = (state: StateSchema) => state.counter;
