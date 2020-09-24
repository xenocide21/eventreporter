exports.seed = function(knex) {
    return knex('event_winners').insert([
        {
            id: 1,
            event_winner1: 'Joe',
            event_winner2: 'Jane',
            event_winner3: "John",
            event_winner4: 'Jill',
            event_winner5: 'Justin',
            event_winner6: 'Jesse',
            event_id: 1,
        },
        {
            id: 2,
            event_winner1: 'Joe',
            event_winner2: 'Jane',
            event_winner3: "John",
            event_winner4: 'Jill',
            event_winner5: 'Justin',
            event_winner6: 'Jesse',
            event_id: 2,
        },
        {
            id: 3,
            event_winner1: 'Joe',
            event_winner2: 'Jane',
            event_winner3: "John",
            event_winner4: 'Jill',
            event_winner5: 'Justin',
            event_winner6: 'Jesse',
            event_id: 3,
        }
    ]);
};
