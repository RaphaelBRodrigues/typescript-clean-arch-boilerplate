import Person from "../../../../../domain/person/entities/person";
import { PersonRepositoryInterface } from "../../../../../domain/types/interfaces/repositories/person-repository.interface";

class PersonTypeOrmRepository implements PersonRepositoryInterface {
  async create(person: Person): Promise<Person> {
    return new Person({
      id: 1,
      birthdate: person.birthdate,
      name: person.name,
    });
  }
}

export default PersonTypeOrmRepository;
