interface PersonData {
  name: string;
  age: number;
  email: string;
}

declare function logPersonData({ name, age, email }: PersonData): void;

declare function sum(x: number, y: number): number;

export { sum, logPersonData };
