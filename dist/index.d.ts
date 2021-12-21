interface PersonData {
    name: string;
    age: number;
    email: string;
}

declare const slogger: {
    logPersonData: (personData: PersonData) => void;
};

export { slogger };
export * from './errors';
