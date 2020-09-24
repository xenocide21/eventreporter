exports.seed = function(knex) {
    return knex('event_rewards').insert([
        {
            id: 1,
            event_reward1: '10 Butterfly Firecrackers',
            event_reward2: '10 Victory Firecrackers',
            event_reward3: "1 God's Vitality Spell Lv1",
            event_reward4: '1 Dragon Rage Spell Lv1',
            event_reward5: '1 Helm Lapis Pocket',
            event_reward6: '',
            event_reward7: '',
            event_reward8: '',
            event_id: 1,
        },
        {
            id: 2,
            event_reward1: '10 Butterfly Firecrackers',
            event_reward2: '10 Victory Firecrackers',
            event_reward3: "1 God's Vitality Spell Lv1",
            event_reward4: '1 Dragon Rage Spell Lv1',
            event_reward5: '1 Helm Lapis Pocket',
            event_reward6: '',
            event_reward7: '',
            event_reward8: '',
            event_id: 2,
        },
        {
            id: 3,
            event_reward1: '10 Butterfly Firecrackers',
            event_reward2: '10 Victory Firecrackers',
            event_reward3: "1 God's Vitality Spell Lv1",
            event_reward4: '1 Dragon Rage Spell Lv1',
            event_reward5: '1 Helm Lapis Pocket',
            event_reward6: '',
            event_reward7: '',
            event_reward8: '',
            event_id: 3,
        }
    ]);
};
