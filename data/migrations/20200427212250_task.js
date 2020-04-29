exports.up = function (knex, promise) {
    return knex.schema.createTable("task", (tbl) => {
        tbl.increments("id");
        tbl.text("Name", 128).unique().notNullable();
        tbl.text("Description", 128).notNullable();
        tbl.text("Additional", 128);
        tbl.boolean('Task_Completed').default(false).notNullable();
    });
};

exports.down = function (knex, promise) {
    return knex.schema.dropTableIfExists("task");
};