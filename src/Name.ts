export class Name {
    private name: string;
    private sobreNome: string;

    constructor(name:string,sobreNome:string){
        this.name = name;
        this.sobreNome = sobreNome ;
    }

    getName(): string {
        return this.name;
    }

    getFullName(): string {
        return `${this.name} ${this.sobreNome}`;
    }
}

