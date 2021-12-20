interface PersonData {
  name: string;
  age: number;
  email: string;
}

function logPersonData({ name, age, email }: PersonData): void {
  console.log(`Hello, ${name}. I'will sent message to email ${email}. Happy birthday to ${age} years`);
}

export { logPersonData };