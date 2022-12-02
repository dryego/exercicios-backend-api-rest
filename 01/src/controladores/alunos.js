let alunos = require('../dados/dadosAlunos');

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
}


module.exports = {
    exibirAlunos,
    buscarAlunoId
};
