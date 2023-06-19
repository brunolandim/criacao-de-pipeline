import { Name } from "../src/Name";

describe("Teste da função Name", () => {
    const nome = 'Bruno';
    const sobrenome = 'Landim'

    const newUser = new Name(nome,sobrenome)
    test('getName Retorna nome passado no construtor', () => {
        expect(newUser.getName()).toEqual('Bruno')
    })
    test('getFullName Retorna nome completo passado no construtor', () => {
        expect(newUser.getFullName()).toEqual(`${nome} ${sobrenome}`)
    })
    test('getFullName Retorna nome completo passado no construtor', () => {
        expect(newUser.getFullName()).not.toEqual('Carlos Landim')
    })
})