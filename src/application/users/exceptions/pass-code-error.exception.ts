export class PassCodeError extends Error {
  constructor() {
    super('The code you provided is invalid or has expired.')
  }
}