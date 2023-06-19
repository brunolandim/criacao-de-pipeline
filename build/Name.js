"use strict";
class Name {
    constructor() {
        this.name = 'Bruno';
        this.sobreNome = 'Landim';
    }
    getName() {
        return this.name;
    }
    getFullName() {
        return `${this.name} ${this.sobreNome}`;
    }
}
const NameUser = new Name();
const result = NameUser.getName();
console.log(result);
