const db = require("../../database/dbConfig");

function find() {
    return db("events as e")
        .join("users as u", "u.id", "e.user_id")
        .select(
            "u.username",
            "e.event_name",
            "e.event_host",
            "e.event_date"
        );
}

function findById(ID) {
    return db("events as e").where("events.id", ID).first()
        .join("users as u", "u.id", "e.user_id")
        .select(
            "u.username",
            "e.event_name",
            "e.event_host",
            "e.event_date"
        );
}

function add(event) {
    return db("events")
        .insert(event)
        .then((id) => {
            return findById(id[0]);
        });
}

function update(event, ID) {
    return db("events").where({ id: ID }).update(event);
}

function remove(ID) {
    return db("events").where({ id: ID }).del();
}

module.exports = {
    find,
    findById,
    remove,
    add,
    update,
};
