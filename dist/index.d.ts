import { InvalidCredential } from './errors/InvalidCrendetial';

interface PersonData {
    name: string;
    age: number;
    email: string;
}

export declare const errors: {
    InvalidCredential: typeof InvalidCredential;
};

export declare const slogger: {
    logPersonData: (personData: PersonData) => void;
};
