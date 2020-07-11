// let actorData = {name: "John Doe", type: "character", img: "icons/mystery-man.png"};
// let actor = new Actor(actorData);
let actor = await actor.create({
    name: "Test MacTest",
    type: "npc",
    img: "icons/mystery-man.png",
    folder: folder.data_id,
    sort: 12000,
    data: {},
    tokens: {},
    items: [],
    flags: {}
});