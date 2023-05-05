import { User } from "./User";

export class Pet {
    id: number;
    id_code: string;
    name: string;
    animal: string;
    color: string;
    country: string;
    user: User;

    public constructor(id: number, id_code: string, name: string, animal: string, color: string, country: string, user: User){
        this.id = id;
        this.id_code = id_code;
        this.name = name;
        this.animal = animal;
        this.color = color;
        this.country = country;
        this.user = user;
    }

}