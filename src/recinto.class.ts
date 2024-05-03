import animal from "./animais.class"

export default abstract class recinto extends animal {
    protected nome_recinto: string
    protected qtd_visitante: number = 0
    protected saude_recinto: number = 100 // saúde começa com 100
    protected animais: [{ nome_animal: string, especie_animal: string, nivel_felicidade_animal: number }]


    constructor() {
        super()
    }

    criar_recinto(nome_recinto: string) {
    }

    // criarAnimal(nome_animal: string, especie_animal: string, nivel_felicidade_animal:number){
    //     let nivel_felicidade_animal_aux = nivel_felicidade_animal
    //     if (nivel_felicidade_animal > 100){
    //         nivel_felicidade_animal_aux = 100
    //     }
    //     if (nivel_felicidade_animal < 0){
    //         nivel_felicidade_animal_aux = 0
    //     }

    //     this.animal = {nome_animal, especie_animal, nivel_felicidade_animal: nivel_felicidade_animal_aux}

    //     return this.animal
    // }

    protected criarAnimal_no_recinto(nome: string, especie: string, nivel_felicidade: number) {
        let animal_criado = this.criarAnimal(nome, especie, nivel_felicidade)

        return animal_criado
    }

    protected alimentar_animal_especifico(recinto: { nome_recinto: string, animais: { nome_animal: string, especie_animal: string, nivel_felicidade_animal: number }[] }, index_animal: string, quantidade: number) { //index do animal pois podem ter vários animais
        try {
            let animal_escolhido = recinto.animais[index_animal]

            this.alimentar(animal_escolhido, quantidade)
            return `${JSON.stringify(animal_escolhido)} foi alimentado`
        } catch {
            return 'Index Não existe'
        }
    }

    ver_animais(nome_recinto: string) {
    }


    protected limpar_recinto(recinto: { nome_recinto: string, qtd_visitante: number, saude_recinto: number, animais: { nome_animal: string, especie_animal: string, nivel_felicidade_animal: number }[] }) {
        if (recinto.saude_recinto + 5 > 100) {
            recinto.saude_recinto + 5
        }
    }

    protected atualizar_quantidade_visitante_por_recinto(recinto: { nome_recinto: string, qtd_visitante: number, saude_recinto: number, animais: { nome_animal: string, especie_animal: string, nivel_felicidade_animal: number }[] }) {
        let visitante_animal: number = recinto.animais.reduce((acumulador, animal) => {
            return acumulador + animal.nivel_felicidade_animal;
        }, 0);
        this.qtd_visitante = this.saude_recinto + visitante_animal
        return this.qtd_visitante
    }
}