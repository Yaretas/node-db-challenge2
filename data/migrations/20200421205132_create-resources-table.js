exports.up = function (knex) {
  return knex.schema.createTable("Projects", (tbl) => {
    tbl.increments("id");
    tbl.text("name", 128).unique().notNullable();
    tbl.text("description");
    tbl.boolean("Task Completed").default(false);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("Projects");
};
