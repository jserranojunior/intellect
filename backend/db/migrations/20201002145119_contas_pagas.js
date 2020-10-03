exports.up = (knex) => {
  return knex.schema.createTable("contas_pagas", function (table) {
    table.increments("id");
    table.integer("contas_a_pagar_id").notNullable();
    table.string("data_pagamento", 255).notNullable();
    table.timestamp("created_at").default(knex.fn.now());
    table.timestamp("updated_at").default(knex.fn.now());
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable("contas_pagas");
};
