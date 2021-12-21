declare const slogger: {
    logPersonData: ({ name, age, email }: import("./interfaces/PersonData").PersonData) => void;
};

interface Constructable<T> {
    new(...args: any) : T;
}

declare class InvalidCredential extends Error {
    constructor(message: string);
}

declare const errors: {
    InvalidCredential: Constructable<InvalidCredential>;
} 

export { slogger, errors };
