const Tech = require('../model/Tech');
const User = require('../model/User');

module.exports = {
    async read(req,res){
        const { user_id } = req.params;

        const user = await User.findByPk(user_id,{
            include: { 
                association: 'techs',
                attributes: ['name'],
                through: {
                    attributes: []
                }, 
            },
        });

        return await res.json(user);
    },
    
    async add(req,res){
        const { user_id } = req.params;
        const { name } = req.body;

        const user = await User.findByPk(user_id);
        if(!user){
            return await res.status(400).json({ error: "User not found" });
        }

        const [ tech ] = await Tech.findOrCreate(
            {where: { name }}
        );

        await user.addTech(tech); //Propriedade do sequelize     

        return await res.json(tech);
    },

    async delete(req,res){
        const { user_id } = req.params;
        const { name } = req.body;

        const user = await User.findByPk(user_id);
        if(!user){
            return await res.status(400).json({ error: "User not found" });
        }

        const tech = await Tech.findOne({
            where: { name }
        });

        await user.removeTech(tech);

        return await res.send("Relacionamento excluído com sucesso!");

    }

}