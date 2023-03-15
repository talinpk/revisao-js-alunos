class DisciplinaControlador {
    constructor() {
        this.disciplinaServico = new DisciplinaServico();
        this.botaoInserir = document.querySelector("#botao-inserir");
        this.botaoInserir.addEventListener("click", () => this.inserir());
    }

    inserir() {
        const nomeDisciplina = document.querySelector("#nome").value;
        const codigoDisciplina = Number(document.querySelector("#codigo").value);
        const disciplina = this.disciplinaServico.inserir(codigoDisciplina, nomeDisciplina);

        if (disciplina) {
            this.mostrarDisciplinaNoHTML(nomeDisciplina, codigoDisciplina);
            alert("Disciplina inserida com sucesso!");
        } else {
            alert("Código já existente não permitido!");
        }
    }

    mostrarDisciplinaNoHTML(nome, codigo) {
        const elementoP = document.createElement("p");
        elementoP.textContent = `${nome} - ${codigo}`;

        const elementoBotaoApagar = document.createElement("button");
        elementoBotaoApagar.textContent = "X";
        elementoBotaoApagar.addEventListener("click", () => {
            this.removerDisciplinaDaLista(codigo);
            elementoP.remove();
        });

        elementoP.appendChild(elementoBotaoApagar);
        document.body.appendChild(elementoP);
    }

    removerDisciplinaDaLista(codigo) {
        this.disciplinaServico.remover(codigo);
    }
}