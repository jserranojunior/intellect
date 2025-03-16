// @generated automatically by Diesel CLI.

diesel::table! {
    acl_routes (id) {
        id -> Unsigned<Bigint>,
        created_at -> Nullable<Datetime>,
        updated_at -> Nullable<Datetime>,
        deleted_at -> Nullable<Datetime>,
        route_id -> Unsigned<Bigint>,
        acl_id -> Unsigned<Bigint>,
    }
}

diesel::table! {
    acls (id) {
        id -> Unsigned<Bigint>,
        created_at -> Nullable<Datetime>,
        updated_at -> Nullable<Datetime>,
        deleted_at -> Nullable<Datetime>,
        #[max_length = 255]
        name -> Varchar,
    }
}

diesel::table! {
    categorias_contas_a_pagars (id) {
        id -> Unsigned<Integer>,
        #[max_length = 255]
        nome -> Varchar,
        #[max_length = 255]
        cor -> Varchar,
        #[max_length = 255]
        tipo -> Varchar,
        created_at -> Nullable<Datetime>,
        updated_at -> Nullable<Datetime>,
        deleted_at -> Nullable<Datetime>,
        soma -> Nullable<Double>,
    }
}

diesel::table! {
    contas_a_pagars (id) {
        id -> Unsigned<Integer>,
        user_id -> Unsigned<Integer>,
        categorias_contas_a_pagar_id -> Nullable<Unsigned<Integer>>,
        #[max_length = 255]
        favorecido -> Varchar,
        inicio_data_pagamento -> Datetime,
        fim_data_pagamento -> Nullable<Datetime>,
        #[max_length = 255]
        descricao -> Nullable<Varchar>,
        #[max_length = 255]
        forma_pagamento -> Nullable<Varchar>,
        #[max_length = 255]
        tipo_conta -> Nullable<Varchar>,
        parcelas -> Nullable<Bigint>,
        created_at -> Nullable<Datetime>,
        updated_at -> Nullable<Datetime>,
        deleted_at -> Nullable<Datetime>,
    }
}

diesel::table! {
    contas_pagas (id) {
        id -> Unsigned<Integer>,
        contas_a_pagar_id -> Nullable<Unsigned<Integer>>,
        #[max_length = 255]
        data_pagamento -> Varchar,
        created_at -> Nullable<Datetime>,
        updated_at -> Nullable<Datetime>,
        deleted_at -> Nullable<Datetime>,
    }
}

diesel::table! {
    migrations (id) {
        id -> Unsigned<Integer>,
        #[max_length = 255]
        name -> Nullable<Varchar>,
        batch -> Nullable<Integer>,
        migration_time -> Timestamp,
    }
}

diesel::table! {
    migrations_lock (index) {
        index -> Unsigned<Integer>,
        is_locked -> Nullable<Integer>,
    }
}

diesel::table! {
    user_acls (id) {
        id -> Unsigned<Bigint>,
        created_at -> Nullable<Datetime>,
        updated_at -> Nullable<Datetime>,
        deleted_at -> Nullable<Datetime>,
        user_id -> Unsigned<Bigint>,
        acl_id -> Unsigned<Bigint>,
    }
}

diesel::table! {
    users (id) {
        id -> Unsigned<Integer>,
        #[max_length = 255]
        name -> Varchar,
        #[max_length = 255]
        email -> Varchar,
        #[max_length = 255]
        password -> Varchar,
        created_at -> Nullable<Datetime>,
        updated_at -> Nullable<Datetime>,
        deleted_at -> Nullable<Datetime>,
        #[max_length = 15]
        cpf -> Varchar,
    }
}

diesel::table! {
    users_tests (id) {
        id -> Unsigned<Bigint>,
        created_at -> Nullable<Datetime>,
        updated_at -> Nullable<Datetime>,
        deleted_at -> Nullable<Datetime>,
        #[max_length = 255]
        name -> Varchar,
        #[max_length = 255]
        email -> Varchar,
    }
}

diesel::table! {
    valores_contas_a_pagars (id) {
        id -> Unsigned<Integer>,
        contas_a_pagar_id -> Nullable<Unsigned<Integer>>,
        #[max_length = 255]
        data_pagamento -> Nullable<Varchar>,
        valor -> Nullable<Double>,
        created_at -> Nullable<Datetime>,
        updated_at -> Nullable<Datetime>,
        deleted_at -> Nullable<Datetime>,
    }
}

diesel::joinable!(acl_routes -> acls (acl_id));
diesel::joinable!(contas_pagas -> contas_a_pagars (contas_a_pagar_id));
diesel::joinable!(user_acls -> acls (acl_id));
diesel::joinable!(valores_contas_a_pagars -> contas_a_pagars (contas_a_pagar_id));

diesel::allow_tables_to_appear_in_same_query!(
    acl_routes,
    acls,
    categorias_contas_a_pagars,
    contas_a_pagars,
    contas_pagas,
    migrations,
    migrations_lock,
    user_acls,
    users,
    users_tests,
    valores_contas_a_pagars,
);
