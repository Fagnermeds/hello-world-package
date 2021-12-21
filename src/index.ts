import { createSlogger } from './log/slogger';
import { InvalidCredential } from './errors/InvalidCrendetial';

const slogger = createSlogger();

export { slogger, InvalidCredential };