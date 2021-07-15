export class User {
  firstname: string = ''
  lastname: string = ''
  role: string = ''
  email: string = ''
  password: string = ''

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }

}
