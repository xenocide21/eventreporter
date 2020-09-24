exports.up = async function(knex) {
    await knex.schema.createTable('events', (event) => {
        event.increments();
        event.text('event_name').notNullable();
        event.text('event_host').notNullable();
        event.timestamp('event_date').defaultTo(knex.fn.now());
        event
            .integer('user_id').unsigned().notNullable()
            .references('id').inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
    })
    await knex.schema.createTable('event_details', (details) => {
        details.increments();
        details.text('description').notNullable();
        details.text('event_image_url').default(null);
        details
            .integer('event_id').unsigned().notNullable()
            .references('id').inTable('events')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
    })
    await knex.schema.createTable('event_rewards', (reward) => {
        reward.increments();
        reward.text('event_reward1').default(null);
        reward.text('event_reward2').default(null);
        reward.text('event_reward3').default(null);
        reward.text('event_reward4').default(null);
        reward.text('event_reward5').default(null);
        reward.text('event_reward6').default(null);
        reward.text('event_reward7').default(null);
        reward.text('event_reward8').default(null);
        reward
            .integer('event_id').unsigned().notNullable()
            .references('id').inTable('events')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
    })
    await knex.schema.createTable('event_winners', (winner) => {
        winner.increments();
        winner.text('event_winner1').default(null);
        winner.text('event_winner2').default(null);
        winner.text('event_winner3').default(null);
        winner.text('event_winner4').default(null);
        winner.text('event_winner5').default(null);
        winner.text('event_winner6').default(null);
        winner.text('event_winner7').default(null);
        winner.text('event_winner8').default(null);
        winner.text('event_winner9').default(null);
        winner.text('event_winner10').default(null);
        winner.text('event_winner11').default(null);
        winner.text('event_winner12').default(null);
        winner.text('event_winner13').default(null);
        winner.text('event_winner14').default(null);
        winner.text('event_winner15').default(null);
        winner.text('event_winner16').default(null);
        winner.text('event_winner17').default(null);
        winner.text('event_winner18').default(null);
        winner.text('event_winner19').default(null);
        winner.text('event_winner20').default(null);
        winner
            .integer('event_id').unsigned().notNullable()
            .references('id').inTable('events')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
    })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('events')
        .dropTableIfExists('event_details')
        .dropTableIfExists('event_rewards')
        .dropTableIfExists('event_winners')
};
