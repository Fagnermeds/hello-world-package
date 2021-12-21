import { createSlogger } from './log/slogger';
import { errors } from './errors';

const slogger = createSlogger();

export { slogger, errors };