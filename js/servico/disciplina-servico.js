class DisciplinaServico {
    #repositorio;

    constructor(repositorio) {
        this.#repositorio = repositorio;
    }

    inserir(disciplina) {
        const codigoExistente = this.#repositorio.buscarPorCodigo(disciplina.codigo);
        if (codigoExistente) {
            // já existe uma disciplina com esse código
            return false;
        }
        this.#repositorio.inserir(disciplina);
        return true;
    }

    remover(codigo) {
        this.#repositorio.remover(codigo);
    }

    listar() {
        return this.#repositorio.listar();
    }

    buscarPorCodigo(codigo) {
        return this.#repositorio.buscarPorCodigo(codigo);
    }
}