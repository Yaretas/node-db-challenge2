exports.up = function (knex) {
    return knex.schema.createTable("projects", (tbl) => {
        tbl.increments("id");
        tbl.text("name", 128).unique().notNullable();
        tbl.text("description", 128);
        tbl.boolean("Task Completed").default(false).notNullable();
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists("projects");
};