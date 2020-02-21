
exports.up = function(knex) {
    return knex.schema.createTable("runescape", function (runescape) {
        runescape.increments();
        runescape.string("username")
    })
  
};

exports.down = function(knex) {
  return knex.scheme.droptableIfExist("runescape")
};
