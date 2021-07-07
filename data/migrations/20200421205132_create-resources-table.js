exports.up = function (knex) {
    return knex.schema.createTable("projects", (tbl) => {
        tbl.increments("id");
        tbl.text("Name", 128).unique().notNullable();
        tbl.text("Description", 128);
        tbl.boolean("Project_Completed").default(false).notNullable();
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists("projects");
};