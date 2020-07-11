// let actorData = {name: "John Doe", type: "character", img: "icons/mystery-man.png"};
// let actor = new Actor(actorData);
    
    // let actor = await actor.create({
    //     name: "Test MacTest",
    //     type: "npc",
    //     img: "icons/mystery-man.png",
    //     folder: folder.data_id,
    //     sort: 12000,
    //     data: {},
    //     tokens: {},
    //     items: [],
    //     flags: {}
    // });

let d = new Dialog({
    title: "Test Dialog",
    content: "<p>You must choose either Option 1, or Option 2</p>",
    buttons: {
        one: {
            icon: '<i class="fas fa-check"></i>',
            label: "Option One",
            callback: () => console.log("Chose One")
        },
        two: {
            icon: '<i class="fas fa-check"></i>',
            label: "Option Two",
            callback: () => console.log("Chose Two")
        }
    },
    default: "two",
    close: () => console.log("This always is logged no matter which option is chosen")
});
d.render(true);
