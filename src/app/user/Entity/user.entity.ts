
export class User {
  _id?: string;
  firstName!: string;
  lastName!: string;
  addresse!: string;
  status!: string;
  email!: string;
  constructor(obj?: User) {
    if(obj) Object.assign(this,obj);
    else {
      this.firstName = '';
      this.lastName = '';
      this.addresse = '';
      this.status = '';
      this.email = '';
    }
   }
}
