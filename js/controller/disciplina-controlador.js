class DisciplinaControlador {
    constructor() {
        this.servico = new DisciplinaServico();
        this.nomeInput = document.querySelector("#nome");
        this.codigoInput = document.querySelector("#codigo");
    }

    inserir() {
        const nome = this.nomeInput.value;
        const codigo = Number(this.codigoInput.value);
        const disciplina = this.servico.inserir(codigo, nome);

        if (disciplina) {
            this.mostrarDisciplinaNoHTML(nome, codigo);
            alert('Disciplina adicionada!');
        } 
        else {
            alert('já existente, código não aceito!')
        }
    }

    mostrarDisciplinaNoHTML(nome, codigo) {
        const elementoP = document.createElement("p");
        elementoP.textContent = `${nome} - ${codigo}`;

        const elementoBotaoApagar = document.createElement("button");
        elementoBotaoApagar.textContent = "X";

        elementoBotaoApagar.addEventListener('click', (event) => {
                this.removerDisciplinaDaLista(codigo);
                event.target.parentElement.remove();
            }
        );
        elementoP.appendChild(elementoBotaoApagar);
        document.body.appendChild(elementoP);
    }

    removerDisciplinaDaLista(codigo) {
        this.servico.remover(codigo);
    }

}
