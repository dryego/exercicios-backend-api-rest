let { alunos, novoIdAluno } = require('../dados/dadosAlunos');

const exibirAlunos = (req, res) => {
    return res.status(200).json(alunos);
};

const buscarAlunoId = (req, res) => {
    const { id } = req.params;

    //const validarId = isNaN(id);
    //validar Id
    if (isNaN(id) === true) {
        return res.status(400).json({ mensagem: 'ID informado Não e um numero valido.' });
    }

    const aluno = alunos.find((aluno) => {
        return aluno.id === Number(id);
    });
    if (!aluno) {
        return res.status(404).json({ mensagem: 'Aluno nao encontrado.' });
    };

    return res.status(200).json(aluno);
};

const cadastraAluno = (req, res) => {
    const { nome, sobrenome, idade, curso } = req.body;

    if (!nome) {
        return res.status(400).json({ mensaguem: 'Nome, Não informado!' });
    };
    if (!sobrenome) {
        return res.status(400).json({ mensaguem: 'Sobrenome, Não informado!' });
    };
    if (!idade) {
        return res.status(400).json({ mensaguem: 'Idade, Não informado!' });
    } else if (idade < 18) {
        return res.status(400).json({ mensagem: 'Aluno Menor de idade' });
    };
    if (!curso) {
        return req.status(400).json({ mensagem: 'Curso, Não informado' })
    }

    const novoAluno = {
        id: novoIdAluno++,
        nome: nome,
        sobrenome: sobrenome,
        idade: idade,
        curso: curso
    }

    alunos.push(novoAluno);

    res.status(201).json(novoAluno);

};


module.exports = {
    exibirAlunos,
    buscarAlunoId,
    cadastraAluno
};
