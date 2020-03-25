const connection = require('../database/connection');

module.exports = {
  async create (req, res) 
  {
    const { title, description, value } = req.body;
    const ong_id = req.headers.authorization;

    const [id] = await connection('incidents').insert({
      ong_id,
      title,
      description,
      value
    });

    return res.json({id});
  },

  async index (req, res)
  {

    // paginacao dos casos registrados 

    const { page = 1 } = req.query;
    const [count] = await connection('incidents').count();
    
    const incidents = await connection('incidents')
      .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
      .limit(5)
      .offset((page - 1) * 5)
      .select(['incidents.*', 'ongs.name', 'ongs.city', 'ongs.whatsapp', 'ongs.email', 'ongs.uf']);

    // resposta com o numero de casos registrados
    res.header('X-Count', count['count(*)']);

    return res.json(incidents);
  },

  async remove (req, res)
  {
    const { id } = req.params;
    const ong_id = req.headers.authorization;

    // verificando se a ong que criou o caso é a mesma que está excluindo
    const incidents = await connection('incidents').where('id', id).select('ong_id').first();

    // se não for
    if(incidents.ong_id != ong_id) return res.status(401).json({error: 'NOT AUTHORIZED'});

    // se for
    await connection('incidents').where('id', id).delete();

    return res.send();
  },

  async show (req, res) 
  {
    const ong_id = req.headers.authorization;

    const incidents = await connection('incidents').where('ong_id', ong_id).select('*');

    return res.json(incidents);
  }
}