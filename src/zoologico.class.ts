import recinto from "./recinto.class";

export default class zoologico extends recinto {
    protected nome_zoologico: string
    protected numero_visitante: number
    protected dinheiro_jogador: number = 0
    protected rodada: number = 1
    protected recintos: { nome_recinto: string, qtd_visitante: number, saude_recinto: number, animais: { nome_animal: string, especie_animal: string, nivel_felicidade_animal: number }[] }[] = []


    constructor(nome_zoologico: string) {
        super()
        this.nome_zoologico = nome_zoologico
    }

    cria_recinto(nome_recinto: string) {
        const recintoExiste = this.recintos.map(recinto => recinto.nome_recinto === nome_recinto);

        if (!recintoExiste.length) {
            this.recintos.push({ nome_recinto, qtd_visitante: 0, saude_recinto: 100, animais: [] })
            return `Recinto ${nome_recinto} Criado.`
        } else {
            return `Recinto '${nome_recinto}' já existe.`
        }
    }

    criar_animal_em_um_recinto(nome_animal: string, especie: string, nivel_felicidade: number, nome_recinto: string) {
        const recinto = this.recintos.find(r => r.nome_recinto === nome_recinto);

        if (recinto) {
            let animal = this.criarAnimal_no_recinto(nome_animal, especie, nivel_felicidade)
            recinto.animais.push(animal)
            return `Animal: ${JSON.stringify(animal)}, criado em ${nome_recinto}`
        } else {
            return 'Recinto não existe'
        }
    }

    alimentar_animal_especifico_recinto(index_animal: string, quantidade: number, nome_recinto: string) {
        const recinto = this.recintos.find(r => r.nome_recinto === nome_recinto);

        if (recinto) {
            return this.alimentar_animal_especifico(recinto, index_animal, quantidade)
        } else {
            return 'Recinto não encontrado'
        }
    }

    ver_animais(nome_recinto: string) {
        const recinto = this.recintos.find(r => r.nome_recinto === nome_recinto);

        if (recinto) {
            return `Aqui estão os animais do seu recinto: ${JSON.stringify(recinto.animais)}`
        } else {
            return 'Recinto não encontrado'
        }
    }

    limpar_recinto_especifico(nome_recinto: string) {
        const recinto = this.recintos.find(r => r.nome_recinto === nome_recinto);

        if (recinto) {
            this.limpar_recinto(recinto)
            return `Recinto ${recinto.nome_recinto} limpado, agora está com ${recinto.saude_recinto} de saude`
        } else {
            return 'Recinto não encontrado'
        }
    }

    protected async atualizar_quantidade_visitante() {
        this.numero_visitante = 0
        this.recintos.forEach(recinto => {
            this.numero_visitante += this.atualizar_quantidade_visitante_por_recinto(recinto)
        })
        return this.numero_visitante
    }

    async proxima_rodada() {
        this.rodada += 1
        await this.atualizar_quantidade_visitante()
        this.dinheiro_jogador += Math.ceil(this.numero_visitante * 0.8)
        return `Iniciando rodada ${this.rodada}, sua quantidade de dinheiro é R$${this.dinheiro_jogador},00`
    }
}