const db = require("../../../database/dbConfig");

function findWinners() {
    return db("event_winners as w")
        .join("events as e", "e.id", "w.event_id")
        .select(
            "w.event_winner1",
            "w.event_winner2",
            "w.event_winner3",
            "w.event_winner4",
            "w.event_winner5",
            "w.event_winner6",
            "w.event_winner7",
            "w.event_winner8",
            "w.event_winner9",
            "w.event_winner10",
            "w.event_winner11",
            "w.event_winner12",
            "w.event_winner13",
            "w.event_winner14",
            "w.event_winner15",
            "w.event_winner16",
            "w.event_winner17",
            "w.event_winner18",
            "w.event_winner19",
            "w.event_winner20",
            "e.event_name",
            "e.event_host"
        );
}

function findWinnersBy(ID) {
    return db("event_winners as w")
        .where("w.id", ID)
        .join("events as e", "e.id", "w.event_id")
        .select(
            "w.event_winner1",
            "w.event_winner2",
            "w.event_winner3",
            "w.event_winner4",
            "w.event_winner5",
            "w.event_winner6",
            "w.event_winner7",
            "w.event_winner8",
            "w.event_winner9",
            "w.event_winner10",
            "w.event_winner11",
            "w.event_winner12",
            "w.event_winner13",
            "w.event_winner14",
            "w.event_winner15",
            "w.event_winner16",
            "w.event_winner17",
            "w.event_winner18",
            "w.event_winner19",
            "w.event_winner20",
            "e.event_name",
            "e.event_host"
        );
}

function findWinnersByEvent(ID) {
    return db("event_winners as w")
        .where("w.event_id", ID)
        .join("events as e", "e.id", "w.event_id")
        .select(
            "w.event_winner1",
            "w.event_winner2",
            "w.event_winner3",
            "w.event_winner4",
            "w.event_winner5",
            "w.event_winner6",
            "w.event_winner7",
            "w.event_winner8",
            "w.event_winner9",
            "w.event_winner10",
            "w.event_winner11",
            "w.event_winner12",
            "w.event_winner13",
            "w.event_winner14",
            "w.event_winner15",
            "w.event_winner16",
            "w.event_winner17",
            "w.event_winner18",
            "w.event_winner19",
            "w.event_winner20",
            "e.event_name",
            "e.event_host"
        );
}

function addWinners(reward) {
    return db("event_winners")
        .insert(reward)
        .then(([id]) => {
            return db("event_winners").where(id, "id").first();
        });
}

function remove(id) {
    return db("event_winners").where({ id }).del();
}

function update(id, change) {
    return db("event_winners").where({ id }).update(change);
}

module.exports = {
    findWinnersByEvent,
    findWinnersBy,
    findWinners,
    addWinners,
    remove,
    update,
};
