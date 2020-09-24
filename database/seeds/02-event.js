
exports.seed = function(knex) {
    return knex('events').insert([
      {
          id: 1,
          event_name: 'Hide and Seek',
          event_host: '[GS]Sinon',
          event_date: 'JAN 1, 2020 18:00 ST',
          user_id: 1
      },
      {
          id: 2,
          event_name: 'Hide and Seek',
          event_host: '[GS]MommaDontPlay',
          event_date: 'JAN 6, 2020 08:00 ST',
          user_id: 2
      },
      {
          id: 3,
          event_name: 'Trivia',
          event_host: '[GS]Stoned',
          event_date: 'JAN 1, 2020 10:00 ST',
          user_id: 3
      }
    ]);
};
