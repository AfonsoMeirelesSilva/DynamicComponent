export class FormalizacaoRequest{
    idCliente: number;
    formalizacao: Tipo[];
    vistadorObservador: objVistadorObservador;
    /**
     *
     */
    constructor() {
        this.formalizacao = [];
        this.vistadorObservador = new objVistadorObservador();        
    }
}

export class objVistadorObservador{
    ecpf: boolean;
    clientes: Cliente[]
    constructor() {
        this.ecpf = false
        this.clientes = [];        
    }
}
export interface Cliente {
    nome: string;
    cpf: number;
    email: string;
    tipo: Tipo;
}
export interface Tipo {
    id: number;
    Descricao: string;
}