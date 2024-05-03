export default abstract class animal{
    protected animal: {nome_animal: string, especie_animal: string, nivel_felicidade_animal: number}
    // nivel de felicidade vai de 0 - 100

    protected criarAnimal(nome_animal: string, especie_animal: string, nivel_felicidade_animal:number){
        let nivel_felicidade_animal_aux = nivel_felicidade_animal
        if (nivel_felicidade_animal > 100){
            nivel_felicidade_animal_aux = 100
        }
        if (nivel_felicidade_animal < 0){
            nivel_felicidade_animal_aux = 0
        }

        this.animal = {nome_animal, especie_animal, nivel_felicidade_animal: nivel_felicidade_animal_aux}

        return this.animal
    }


    protected alimentar(animal: {nome: string, especie: string, nivel_felicidade_animal: number}, quantidade:number){
        let nivel_felicidade_animal_aux = quantidade + animal.nivel_felicidade_animal 
        if (nivel_felicidade_animal_aux > 100){
            nivel_felicidade_animal_aux = 100
        }
        if (nivel_felicidade_animal_aux < 0){
            nivel_felicidade_animal_aux = 0
        }
        this.animal.nivel_felicidade_animal = nivel_felicidade_animal_aux
    }
}