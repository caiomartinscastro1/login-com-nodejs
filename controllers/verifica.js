const User = require('../models/User');

const verifica = async (req , res) => {
    const email = req.body.email;
    const senha = req.body.senha;

    const verificacao = await User.findOne(
        {
            raw: true,
            where: {
                email: email,
            },
        },
    );

    console.log(verificacao);

    var login = false;

    if(!verificacao){
        login = false;
    }else{
        if(verificacao.senha == senha){
            login = true;
        }
    }

    if(login){
        res.redirect('/dados');
    }else{
        res.redirect('/');
    }

}

module.exports = verifica;