// let actorData = {name: "John Doe", type: "character", img: "icons/mystery-man.png"};
// let actor = new Actor(actorData);
    
//     let actor = await actor.create({
//         name: "Test MacTest",
//         type: "npc",
//         img: "icons/mystery-man.png",
//         folder: folder.data_id,
//         sort: 12000,
//         data: {},
//         tokens: {},
//         items: [],
//         flags: {}
//     });



Hooks.on("renderSidebarTab", async (app, html) => {
    if (app.options.id == "actors")
    {
        let button = $("<button class='import-mm'><i class='fas fa-file-import'></i>MM-Import</button>")
        button.click(function() {
            new Dialog({
                title: "Test Dialog",
                content: "<p>You must choose either Option 1, or Option 2</p>",
                buttons: {
                    one: {
                        icon: '<i class="fas fa-check"></i>',
                        label: "Make an actor",
                        callback: async function() {
                            console.log("Chose Make an actor")
                            // let actor = new Actor();
                            let actor = await Actor.create({
                                name: "Test MacTest",
                                type: "npc",
                                img: "icons/mystery-man.png",
                                // folder: folder.data_id,
                                sort: 12000,
                                data:{},
                                tokens: {},
                                items: [],
                                flags: {}
                            });
                        }
                    },
                    two: {
                        icon: '<i class="fas fa-check"></i>',
                        label: "Option Two",
                        callback: () => console.log("Chose Two")
                    }
                },
                default: "two",
                close: () => console.log("This always is logged no matter which option is chosen")
            }).render(true);
        })
        html.find(".directory-footer").append(button);
    }

})
