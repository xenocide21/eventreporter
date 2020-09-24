exports.seed = function(knex) {
    return knex('event_details').insert([
        {
            id: 1,
            description: 'Total of 6 winners, normal PVP rules',
            event_image_url: '',
            event_id: 1,
        },
        {
            id: 2,
            description: 'Total of 12 winners, normal PVP rules, [GS]Sinon participated in event',
            event_image_url: '',
            event_id: 2,
        },
        {
            id: 3,
            description: 'Total of 10 winners, categories Sports, Geography, Science',
            event_image_url: '',
            event_id: 3,
        }
    ]);
};