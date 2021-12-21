import { errors } from './errors';

interface PersonData {
    name: string;
    age: number;
    email: string;
}

export declare const slogger: {
    logPersonData: (personData: PersonData) => void;
};
export { errors };
