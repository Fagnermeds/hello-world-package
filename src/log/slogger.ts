function createSlogger() {
  function logPersonData({ name, age, email }: any): void {
    console.log(`Hello, ${name}. I'will sent message to email ${email}. Happy birthday to ${age} years`);
  }

  return {
    logPersonData,
  }
}

export { createSlogger };
