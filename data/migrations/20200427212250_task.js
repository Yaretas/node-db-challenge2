exports.up = function (knex) {
    return knex.schema.createTable("task", (tbl) => {
        tbl.increments("id");
        tbl.text("name", 128).unique().notNullable();
        tbl.text("description", 128);
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists("task");
};