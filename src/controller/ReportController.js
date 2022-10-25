const User = require('../model/User');
const { Op } = require('sequelize');

module.exports = {
    async show(req, res) {
        //Encontrar todos os usuários que tem email que terminam com @gmail.com
        //Desses usuários, buscar todos que moram na rua 8
        //Desses usuários, buscar as tecnologias que começam com Node

        const user = await User.findAll({
            attributes: ['name', 'email'],
            where: {
                email: {
                    [Op.like]: '%gmail.com%'
                }
            },
            include: [{
                association: 'addresses',
                attributes: ['street', 'number'],
                where: {
                    number: 8
                }
            },
            {
                association: 'techs',
                attributes: ['name'],
                where: {
                    name: {
                        [Op.like]: 'node%'
                    }
                }
            }],
        })

        return await res.json(user);
    },
}
