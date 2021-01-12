var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "just testing ;) ",
assets : {
large_image : "no",
large_text : "testing status ;)" // THIS WILL SHOW AS "Playing <Status>" from the outisde
},
buttons : [{label : "test" , url : "example.com"},{label : "test2",url : "example.com"}]
}
})
})
client.login({ clientId : "798448006701121558" }).catch(console.error);