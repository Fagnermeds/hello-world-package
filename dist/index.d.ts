import { errors } from './errors';
declare const slogger: {
    logPersonData: ({ name, age, email }: any) => void;
};
export { slogger, errors };
