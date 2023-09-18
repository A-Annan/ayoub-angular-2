

export class Project {
  _id?: string;
  name!: string;
  startDate!: string;
  endDate!: string;

  constructor(obj?: Project) {
    if(obj) Object.assign(this, obj);
    else {
      this.name = '';
      this.startDate = '';
      this.endDate = '';
    }
  }
}
