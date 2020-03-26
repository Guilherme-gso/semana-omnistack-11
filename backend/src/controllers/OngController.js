const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
  async index (req, res)
  {
    const ongs = await connection('ongs').select('*');
    
    return res.json(ongs);
  },

  async create (req, res)
  {
    const { name, email, whatsapp, city, uf } = req.body;
    const id = crypto.randomBytes(4).toString('HEX');

      const verifyEmail = await connection('ongs').where('email', email).first();
      
      if(verifyEmail) return res.status(400).json({error: 'user exists'});

      await connection('ongs').insert({
          id,
          name,
          email,
          whatsapp,
          city,
          uf
        });

      return res.json({id});
  },

  // teste
  // async delete(req, res) {
  //   const { id} = req.params;
  //   await connection('ongs').where('id', id).delete();

  //   res.send();
  // }
}