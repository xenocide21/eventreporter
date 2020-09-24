const db = require("../../../database/dbConfig");

function findDetails() {
    return db("event_details as d")
        .join("events as e", "e.id", "d.event_id")
        .select(
            "d.description",
            "d.event_image_url",
            "e.event_name");
}

function findDetailsBy(ID) {
    return db("event_details as d")
        .where("d.id", ID)
        .join("events as e", "e.id", "d.event_id")
        .select(
            "d.description",
            "d.event_image_url",
            "e.event_name");
}

function findDetailsByEvent(ID) {
    return db("event_details as d")
        .where("d.event_id", ID)
        .join("events as e", "e.id", "d.event_id")
        .select(
            "d.description",
            "d.event_image_url",
            "e.event_name");
}

function addDetails(detail) {
    return db("event_details")
        .insert(detail)
        .then(([id]) => {
            return db("event_details").where(id, "id").first();
        });
}

function remove(id) {
    return db("event_details").where({ id }).del();
}

function update(id, change) {
    return db("event_details").where({ id }).update(change);
}

module.exports = {
    findDetailsByEvent,
    findDetailsBy,
    findDetails,
    addDetails,
    remove,
    update,
};
