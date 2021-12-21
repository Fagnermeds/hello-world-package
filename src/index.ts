import { createSlogger } from './log/slogger';

const slogger = createSlogger();

export { slogger };

export * from './errors';