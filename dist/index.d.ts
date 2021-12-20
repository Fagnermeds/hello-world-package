interface PersonData {
    name: string;
    age: number;
    email: string;
}

declare const slogger: {
    logPersonData: ({ name, age, email }: PersonData) => void;
};

export { slogger };
