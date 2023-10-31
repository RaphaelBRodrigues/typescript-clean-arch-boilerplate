import { PersonRepositoryInterface } from "../../types/interfaces/repositories/person-repository.interface";
import {
  CreatePersonInputDto,
  CreatePersonOutputDto,
} from "../dtos/create-person.dto";
import Person from "../entities/person";

class CreatePersonUseCase {
  private personRepository: PersonRepositoryInterface;

  constructor(personRepository: PersonRepositoryInterface) {
    this.personRepository = personRepository;
  }

  async execute(createPersonInputDto: CreatePersonInputDto) {
    const person = new Person({
      birthdate: createPersonInputDto.birthdate,
      name: createPersonInputDto.name,
    });

    await this.personRepository.create(person);

    const createPersonOutputDto = new CreatePersonOutputDto({
      person,
      success: true,
    });

    return createPersonOutputDto;
  }
}

export default CreatePersonUseCase;
