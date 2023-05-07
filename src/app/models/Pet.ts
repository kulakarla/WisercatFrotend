

export class Pet {
    id: number;
    idCode: string;
    name: string;
    animal: string;
    color: string;
    country: string;

    public constructor(id: number, idCode: string, name: string, animal: string, color: string, country: string){
        this.id = id;
        this.idCode = idCode;
        this.name = name;
        this.animal = animal;
        this.color = color;
        this.country = country;
    }

}