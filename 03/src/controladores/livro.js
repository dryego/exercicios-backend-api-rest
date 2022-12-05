let { livros, novoIdLivro } = require('../bacoDeDados/livros');

const exibirLivros = (req, res) => {
    return res.status(200).json(livros);
};

const buscarLivroId = (req, res) => {
    const { id } = req.params;

    if (isNaN(id) === true) {
        return res.status(400).json({ mensagem: 'ID informado Não e um numero valido.' });
    }

    const livro = livros.find((livro) => {
        return livro.id === Number(id);
    });
    //const livro = livros.find(livro => livro.id === Number(id));
    if (!livro) {
        return res.status(404).json({ mensagem: 'livros nao encontrado.' });
    };

    return res.status(201).json(livro);
};

const adicionarLivro = (req, res) => {
    const { titulo, autor, ano, numPaginas } = req.body;

    if (!titulo) {
        return res.status(400).json({ mensaguem: 'Titulo, não informado!' });
    }

    if (!autor) {
        return res.status(400).json({ mensaguem: 'Autor, não informado!' });
    }

    if (!ano) {
        return res.status(400).json({ mensaguem: 'Ano de lançãmento, não informado!' });
    }

    if (!numPaginas) {
        return res.status(400).json({ mensaguem: 'Numero de paginas, não informado!' });
    }

    const novoLivro = {
        id: novoIdLivro++,
        titulo: titulo,
        autor: autor,
        ano: ano,
        numPaginas: numPaginas
    }

    livros.push(novoLivro);

    res.status(201).json(novoLivro);

};

const alteraLivro = (req, res) => {
    const { id } = req.params;
    const { titulo, autor, ano, numPaginas } = req.body;

    if (isNaN(id) === true) {
        return res.status(400).json({ mensagem: 'ID informado Não e um numero valido.' });
    }
    if (!titulo) {
        return res.status(400).json({ mensaguem: 'Titulo, não informado!' });
    }

    if (!autor) {
        return res.status(400).json({ mensaguem: 'Autor, não informado!' });
    }

    if (!ano) {
        return res.status(400).json({ mensaguem: 'Ano de lançãmento, não informado!' });
    }

    if (!numPaginas) {
        return res.status(400).json({ mensaguem: 'Numero de paginas, não informado!' });
    }

    const livro = livros.find((livro) => {
        return livro.id === Number(id);
    });

    if (!livro) {
        return res.status(404).json({ mensagem: 'livros nao encontrado.' });
    };
    livro.titulo = titulo;
    livro.autor = autor;
    livro.ano = ano;
    livro.numPaginas = numPaginas;

    return res.status(201).json({ mensagem: 'Livro substituído.' });
};

const subistituirDadosDoLivro = (req, res) => {
    const { id } = req.params;
    const { titulo, autor, ano, numPaginas } = req.body;

    if (isNaN(id) === true) {
        return res.status(400).json({ mensagem: 'ID informado Não e um numero valido.' });
    }

    const livro = livros.find((livro) => {
        return livro.id === Number(id);
    });

    if (!livro) {
        return res.status(404).json({ mensagem: 'livros nao encontrado.' });
    };

    if (titulo) {
        livro.titulo = titulo;
        return res.status(201).json('Titulo alterado.')
    };

    if (autor) {
        livro.autor = autor;
        return res.status(201).json('Autor alterado.')
    };

    if (ano) {
        livro.ano = ano;
        return res.status(201).json('Ano alterado.')
    };

    if (numPaginas) {
        livro.numPaginas = numPaginas;
        return res.status(201).json('Numero de Paginas alterado.')
    }

};

const deletarLivro = (req, res) => {
    const { id } = req.params;

    const livro = livros.find((livro) => {
        return livro.id === Number(id);
    });
    if (!livro) {
        res.status(404).json({ mensagem: 'Não existe livro a ser removido para o ID informado.' })
    }

    livros = livros.filter((livro) => {
        return livro.id !== Number(id);
    });

    return res.json({ mensagem: 'livro removido com sucesso.' });
};
module.exports = {
    exibirLivros,
    buscarLivroId,
    adicionarLivro,
    alteraLivro,
    subistituirDadosDoLivro,
    deletarLivro
}