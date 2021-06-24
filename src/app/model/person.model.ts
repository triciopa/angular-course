export class Person {
  fname: string;
  lname: string;
  age: number;
  active: boolean;

  constructor(pFname: string, pLname: string, pAge: number, pActive: boolean) {
    this.fname = pFname;
    this.lname = pLname;
    this.age = pAge;
    this.active = pActive;
  }
}