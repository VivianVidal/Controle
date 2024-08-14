class Produto {
    constructor(nome, codigo, preco, quantidade,categoria) {
        this.nome = nome;
        this.codigo = codigo;
        this.preco = preco;
        this.quantidade = parseInt(quantidade);
        this.categoria = categoria;
        this.proximoProduto = null;
        this.produtoAnterior = null;
    }
}

class ListaDeProdutos {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    adicionarProduto(nome, codigo, preco, quantidade,categoria) {
        if (nome && codigo && preco && quantidade&&categoria) {
                let novoProduto = new Produto(nome, codigo, preco, quantidade, categoria);
                if (this.head === null) {
                    this.head = novoProduto;
                    this.tail = novoProduto;
                } else {
                    this.tail.proximoProduto = novoProduto;
                    novoProduto.produtoAnterior = this.tail;
                    this.tail = novoProduto;
                }
                return `Produto ${nome} cadastrado com sucesso ! `
        } else {
            return `Preencha os dados `
        }
    }

    listarProdutos() {
        let produto = this.head;
        if (produto === null) {
            return "Não há produtos cadastros"
        } else {
            let todosProdutos = ''
            while (produto !== null) {
                todosProdutos += `Produto: ${produto.nome} --- Código : ${produto.codigo} --- Preço: ${produto.preco} --- Quantidade em estoque: ${produto.quantidade} --- Categoria: ${produto.categoria}<br>`
                produto = produto.proximoProduto;
            }
            return todosProdutos;
        }
    }

    removerProduto(codigo) {
        let produto = this.head;
        while (produto !== null) {
            if (produto.codigo === codigo) {
                if (produto === this.head && produto === this.tail) {
                    this.head = null;
                    this.tail = null;
                }
                else if (produto === this.head) {
                    this.head = this.head.proximoProduto;
                    this.head.produtoAnterior = null;
                }
                else if (produto === this.tail) {
                    this.tail = this.tail.produtoAnterior;
                    this.tail.proximoProduto = null;
                }
                else {
                    produto.produtoAnterior.proximoProduto = produto.proximoProduto;
                    produto.proximoProduto.produtoAnterior = produto.produtoAnterior
                }
                return;
            }
            produto = produto.proximoProduto;
        }
    }

    getProducts(codigo) {
        if (this.head === null) {
            return "Não há produtos cadastrados !"
        } else {
            let produto = this.head;
            while (produto !== null && produto.proximoProduto !== null) {
                if (produto.codigo === codigo) {
                    return `Produto: ${produto.nome}, Código : ${produto.codigo}, Preço: ${produto.preco}, Quantidade em estoque: ${produto.quantidade}`
                }
                produto = produto.proximoProduto
            }

        }
    }

    updateQuantidade(codigo, quantidade) {
        if (this.head === null) {
            return false;  
        } else {
            let produto = this.head;
            while (produto !== null) {
                if (produto.codigo === codigo) {
                    produto.quantidade += parseInt(quantidade);  
                    return true;  
                }
                produto = produto.proximoProduto;
            }
            return false;  
        }
    }

    filterCategory(categoria){
        let produto = this.head;
        let produtosFiltrados = '';

        while(produto!==null){
            if(produto.categoria === categoria){
                produtosFiltrados += `Produto: ${produto.nome} --- Código : ${produto.codigo} --- Preço: ${produto.preco} --- Quantidade em estoque: ${produto.quantidade} --- Categoria: ${produto.categoria}<br>`;
            }
            produto = produto.proximoProduto;
        }
        return produtosFiltrados 
    }
}

export { ListaDeProdutos }


