const User = require('../models/User');

const save = async (req , res) => {
    await User.create(
        {
            email: req.body.email,
            senha: req.body.senha,
        },
    );

    res.redirect('/');
}

module.exports = save;