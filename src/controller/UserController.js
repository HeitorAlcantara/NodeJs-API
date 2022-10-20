const User = require('../model/User');

module.exports = {
    async read(req,res){
        const user = await User.findAll();

        return await res.json(user)
    },
    
    async add(req,res){
        const { name, email } = req.body;

        const user = await User.create({ name, email });

        return await res.json(user);
    },

}