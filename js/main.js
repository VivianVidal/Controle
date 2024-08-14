import { Categoria } from './Categoria.js';
import { ListaDeProdutos } from './Produto.js';

class App {
    constructor() {
        this.categoria = new Categoria();
        this.produt = new ListaDeProdutos();

        this.init();
    }

    init() {
        document.getElementById('add-categ-btn').addEventListener('click', (event) => this.addCateg(event));
        document.getElementById('listar-categ-btn').addEventListener('click', () => this.listarCateg());
        document.getElementById('add-produto-btn').addEventListener('click', (event) => this.addProduto(event));
        document.getElementById('listar-produtos-btn').addEventListener('click', () => this.listarProdutos());
        document.getElementById('filter').addEventListener('click', ()=> this.filtrarCategoria());
    }

    addCateg(event) {
        event.preventDefault();
        const categoria = document.getElementById('cat').value;
        const descricao = document.getElementById('des').value;

        const retorno = this.categoria.adicionarCategoria(categoria, descricao);
        document.getElementById('categoria-container').innerHTML = `<div>${retorno}</div>`;

        document.getElementById('cat').value = '';
        document.getElementById('des').value = '';
        this.atualizaCat();
    }

    listarCateg() {
        const message = this.categoria.listarCategorias();
        document.getElementById('categoria-container').innerHTML = `<div>${message}</div>`;
    }

    atualizaCat() {
        const select = document.getElementById("categoria-select");
        select.innerHTML = ""; 

        const categorias = this.categoria.categoriasSelect(); 

        categorias.forEach(nome => {
            const option = document.createElement("option");
            option.value = nome;
            option.textContent = nome;
            select.appendChild(option);
        });
    }

    addProduto(event) {
        event.preventDefault();

        const nome = document.getElementById('nome').value;
        const codigo = document.getElementById('cod').value;
        const preco = document.getElementById('preco').value;
        const quantidade = document.getElementById('quant').value;
        const categoria = document.getElementById('categoria-select').value;

        if (this.produt.updateQuantidade(codigo, quantidade)) {
            document.getElementById('produtos-container').innerHTML = 'Quantidade atualizada com sucesso!';
        } else {
            const produtoAdd = this.produt.adicionarProduto(nome, codigo, preco, quantidade, categoria);
            document.getElementById('produtos-container').innerHTML = produtoAdd;
        }

        document.getElementById('nome').value = '';
        document.getElementById('cod').value = '';
        document.getElementById('preco').value = '';
        document.getElementById('quant').value = '';
    }

    listarProdutos() {
        const produtosHtml = this.produt.listarProdutos();
        document.getElementById('produtos-container').innerHTML = produtosHtml;
    }

    filtrarCategoria(){
        const categoriaSelecionada = document.getElementById('categoria-select').value;
        const produtosFiltrados = this.produt.filterCategory(categoriaSelecionada);
        document.getElementById('produtos-container').innerHTML = produtosFiltrados;
    }
}


new App();
