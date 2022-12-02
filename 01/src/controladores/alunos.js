let alunos = require('../dados/dadosAlunos');

const exibirAlunos = (req, res) => {
    return res.status(200).json(alunos);
};


module.exports = {
    exibirAlunos
};
