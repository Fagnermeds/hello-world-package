import { PersonData } from '../interfaces/PersonData';

function createSlogger() {
  function logPersonData({ name, age, email }: PersonData): void {
    console.log(`Hello, ${name}. I'will sent message to email ${email}. Happy birthday to ${age} years`);
  }

  return {
    logPersonData,
  }
}

export { createSlogger };
