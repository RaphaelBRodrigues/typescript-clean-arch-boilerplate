import Person from "../../../person/entities/person";

export interface PersonRepositoryInterface {
    create(person: Person): Promise<Person>;
};