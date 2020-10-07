exports.up = (knex) =>
  knex.schema.createTable("users", (table) => {
    table.increments("id");
    table.text("name", 255).notNullable();
    table.string("email", 255).unique().notNullable();
    table.timestamp("created_at").default(knex.fn.now());
    table.timestamp("updated_at").default(knex.fn.now());
  });

exports.down = (knex) => knex.schema.dropTable("users");
