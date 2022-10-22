const Address = require('../model/Address');
const User = require('../model/User');

module.exports = {
    async add(req,res){
        const { user_id } = req.params;
        const { zipcode, street, number } = req.body;
        
        const user = await User.findByPk(user_id);

        if(!user){
            return await res.status(400).json({ error: "User not found" });
        }

        const address = await Address.create({ zipcode, street, number, user_id });

        return await res.json(address);
    },

    async read(req, res) {
        const { user_id } = req.params;
        const user = await User.findByPk(user_id, { //Eager loading
            include: { association: 'addresses' }
        });

        if(user){
            return await res.json(user);
        }

        const address = await Address.findAll();
        return await res.json(address);
    },
}