import { PersonData } from './interfaces/PersonData';

declare const slogger: {
    logPersonData: (personData: PersonData) => void;
};

declare class InvalidCredential extends Error {
    constructor(message: string);
}

declare const errors: {
    InvalidCredential: typeof InvalidCredential;
};

export { slogger, errors };
