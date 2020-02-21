const db = require('../data/dbConfig.js');

module.exports = {
  insert,
  update,
  remove,
  getAll,
  findById,
};

async function insert(runescape) {
  console.log("insert function")
  const [id] = await db('runescape').insert(runescape, 'id');

  return db('runescape')
    .where({ id })
    .first();
}

// function insert(user) {
//   return db("runescape").insert(user)
// }

async function update(id, changes) {
  return null;
}

function remove(id) {
  return db("runescape").where({ id }).del();
}

function getAll() {
  return db('runescape');
}

function findById(id) {
  return null;
}