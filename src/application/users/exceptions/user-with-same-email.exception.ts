export class UserWithSameEmail extends Error {
  constructor() {
    super('The email address provided is already associated with an existing account.')
  }
}