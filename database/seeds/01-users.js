exports.seed = function (knex) {
    return knex("users").insert([
        {
            username: "[GS]Sinon",
            password: "test",
        },
        {
            username: "[GS]MommaDontPlay",
            password: "test2",
        },
        {
            username: "[GS]Stoned",
            password: "test3",
        },
    ]);
};
