class Disciplina {
    constructor(codigo, nome, alunos) {
      this._codigo = codigo;
      this._nome = nome;
      this._alunos = [];
    }
  
    get codigo() {
      return this._codigo;
    }
  
    set codigo(codigo) {
      this._codigo = codigo;
    }
  
    get nome() {
      return this._nome;
    }
  
    set nome(nome) {
      this._nome = nome;
    }
  
    get alunos() {
      return this._alunos;
    }
  
    set alunos(alunos) {
      this._alunos = alunos;
    }
  }