interface PersonData {
    name: string;
    age: number;
    email: string;
}

declare const slogger: {
    logPersonData: (personData: PersonData) => void;
};

declare class InvalidCredential extends Error {
    constructor(message: string);
}

declare const errors: {
    InvalidCrendetial: InvalidCredential, 
}

export { slogger };