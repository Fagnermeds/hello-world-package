class InvalidCredential extends Error {
  constructor(message: string) {
    super(message);
  }
}

export { InvalidCredential };
