exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries and resets ids
  return knex('runescape')
    .truncate()
    .then(function() {
      return knex('runescape').insert([
        { id: 1, username: 'Haloking1212' },
        { id: 2, username: 'Jglove' },
        { id: 3, username: 'Gaben X' },
      ]);
    });
};