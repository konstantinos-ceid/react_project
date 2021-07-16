


const Pool = require('pg').Pool




const pool = new Pool({
  user: 'project',
  host: 'localhost',
  database: 'api',
  password: 'password',
  port: 5432,
})
const getUsers = (request, response) => {
  pool.query('SELECT * FROM pro ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}


const getUserById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM pro WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createUser = (request, response) => {
  const last_name = request.body.last_name;
  const first_name = request.body.first_name;
  const is_active = request.body.is_active;
  const date_of_birth = request.body.date_of_birth;

  pool.query('INSERT INTO pro (last_name, first_name, is_active, date_of_birth) VALUES ($1, $2, $3, $4)', [last_name, first_name, is_active, date_of_birth], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`User added `)
  })
}

const updateUser = (request, response) => {
  const id = request.body.id;
  const last_name = request.body.last_name;
  const first_name = request.body.first_name;
  const is_active = request.body.is_active;
  const date_of_birth = request.body.date_of_birth;

  pool.query(
    'UPDATE  pro SET last_name = $1, first_name = $2, is_active = $3, date_of_birth= $4 WHERE id = $5',
    [last_name, first_name, is_active, date_of_birth, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User modified `)
    }
  )
}

const deleteUser = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM pro WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`User deleted `)
  })
}

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
}