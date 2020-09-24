const db = require("../../../database/dbConfig");

function findRewards() {
    return db("event_rewards as r")
        .join("events as e", "e.id", "r.event_id")
        .select(
            "r.event_reward1",
            "r.event_reward2",
            "r.event_reward3",
            "r.event_reward4",
            "r.event_reward5",
            "r.event_reward6",
            "r.event_reward7",
            "r.event_reward8",
            "e.event_name",
            "e.event_host"
        );
}

function findRewardsBy(ID) {
    return db("event_rewards as r")
        .where("r.id", ID)
        .join("events as e", "e.id", "r.event_id")
        .select(
            "r.event_reward1",
            "r.event_reward2",
            "r.event_reward3",
            "r.event_reward4",
            "r.event_reward5",
            "r.event_reward6",
            "r.event_reward7",
            "r.event_reward8",
            "e.event_name",
            "e.event_host"
        );
}

function findRewardsByEvent(ID) {
    return db("event_rewards as r")
        .where("r.event_id", ID)
        .join("events as e", "e.id", "r.event_id")
        .select(
            "r.event_reward1",
            "r.event_reward2",
            "r.event_reward3",
            "r.event_reward4",
            "r.event_reward5",
            "r.event_reward6",
            "r.event_reward7",
            "r.event_reward8",
            "e.event_name",
            "e.event_host"
        );
}

function addRewards(reward) {
    return db("event_rewards")
        .insert(reward)
        .then(([id]) => {
            return db("event_rewards").where(id, "id").first();
        });
}

function remove(id) {
    return db("event_rewards").where({ id }).del();
}

function update(id, change) {
    return db("event_rewards").where({ id }).update(change);
}

module.exports = {
    findRewardsByEvent,
    findRewardsBy,
    findRewards,
    addRewards,
    remove,
    update,
};
