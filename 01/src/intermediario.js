const validarSenha = (req, res, next) => {
    const { senha } = req.query;

    if (!senha) {
        return res.status(401).json({ mensagem: 'Senha NÃO informada' });
    }
    if (senha !== 'cubos123') {
        return res.status(200).json({ mensagem: 'A senha esta incorreta' });
    }

    next();
}

module.exports = { validarSenha };