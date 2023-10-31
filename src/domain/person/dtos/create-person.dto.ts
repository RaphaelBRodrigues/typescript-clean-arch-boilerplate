import Person from "../entities/person";

export class CreatePersonInputDto {
  public birthdate: Date;
  public name: string;

  constructor(params: CreatePersonInputDto) {
    this.birthdate = params.birthdate;
    this.name = params.name;
  }
}

export class CreatePersonOutputDto {
  person: Person;
  success: boolean;

  constructor(params: CreatePersonOutputDto) {
    this.success = params.success;
    this.person = params.person;
  }
}
