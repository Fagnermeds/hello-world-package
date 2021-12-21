declare function createSlogger(): {
    logPersonData: ({ name, age, email }: any) => void;
};
export { createSlogger };
