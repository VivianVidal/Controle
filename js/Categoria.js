class Categoria {
    constructor() {
        this.categorias = {};
    }

    adicionarCategoria(nome, descricao) {
        if (nome && descricao) {
            this.categorias[nome] = descricao;
            return `Categoria: ${nome} cadastrada com sucesso`
        } else {
            return `Preencha os dados !`
        }
    }

    listarCategorias() {
        const categoriasArray = Object.entries(this.categorias);
        if (categoriasArray.length > 0) {
            const dados = categoriasArray.map(([nome, descricao]) => {
                return `${nome}: ${descricao}<br>`;
            }).join('');
            return dados;
        } else {
            return `Não há categorias no cadastro`
        }
    }

    categoriasSelect() {
        const categorias = Object.keys(this.categorias)
        return categorias
    }
}

export { Categoria }