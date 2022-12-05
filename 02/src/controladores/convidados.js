let convidados = require('../bancoDeDados/convidados');

// const listaConvidados = (req, res) => {
//     return res.status(200).json(convidados);
// };

const encontraConvidado = (req, res) => {
    //const { nome } = req.query.nome;

    if (!req.query.nome) {
        return res.status(200).json(convidados);
    }

    const convidado = convidados.indexOf(req.query.nome);

    if (convidado === -1) {
        return res.status(404).json({ mensagem: 'Convidado NÂO encontrado.' });
    };
    return res.status(200).json({ mensagem: 'Convidado presente.' });
};

const adicionarConvidado = (req, res) => {
    const { nome } = req.body;

    const buscarNome = convidados.find((convidado) => { return convidado === nome });

    if (nome === buscarNome) {
        return res.status(400).json({ mensagem: 'O nome do convidado a ser adicionado já existe na lista. Caso queria adicionar outro convidado de mesmo nome, favor fornecer o sobrenome também.' });
    }

    const novoConvidado = nome;

    convidados.push(novoConvidado);

    return res.status(200).json({ mensagem: 'Convidado adicionado.' });
};

const removerConvidado = (req, res) => {
    const { nome } = req.params;

    const indiceComvidado = convidados.findIndex((convidado) => { return convidado === nome });

    if (indiceComvidado < 0) {
        return res.status(404).json({ mensagem: 'O nome do convidado a ser removido não existe na lista. Nenhum convidado foi removido.' });
    };

    convidados.splice(indiceComvidado, 1);

    return res.json({ mensagem: 'O convidado foi removido.' });

};

module.exports = {
    encontraConvidado,
    adicionarConvidado,
    removerConvidado
}