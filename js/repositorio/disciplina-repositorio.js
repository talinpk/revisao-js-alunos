class DisciplinaRepositorio {
    constructor() {
        this._disciplinas = [];
    }

    inserir(disciplina) {
        this._disciplinas.push(disciplina);
        return disciplina;
    }

    remover(codigo) {
        const indexRemocao = this._disciplinas.findIndex(disciplina => disciplina.codigo === codigo);
        if (indexRemocao !== -1) {
            this._disciplinas.splice(indexRemocao, 1);
        }
    }

    listar() {
        return this._disciplinas;
    }

    buscarPorCodigo(codigo) {
        return this._disciplinas.filter(disciplina => disciplina.codigo === codigo);
    }
}