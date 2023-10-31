interface PersonConstructor {
    id?: number;
    name: string;
    birthdate: Date;
}

class Person {
    private _id?: number;
    private _name: string;
    private _birthdate: Date;
    
    constructor(person: PersonConstructor) {
        this._birthdate = person.birthdate;
        this._name = person.name;
    }
 
    setId(id: number) {
        this._id = id;
    }

    get name() {
        return this._name;
    }

    get birthdate() {
        return this._birthdate;
    }


}

export default Person;