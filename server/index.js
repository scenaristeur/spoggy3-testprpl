//https://github.com/Polymer/pwa-starter-kit/issues/121 ajout prpl a serveur express
const express = require('express')
prpl = require('prpl-server');
const app = express();



const server = require('http').createServer(app);
const io = require('socket.io')(server, {
  serveClient: false,
  wsEngine: 'ws' // uws is not supported since it is a native module
});
//var io = require('socket.io')(server);
const port = process.env.PORT || 5000;

io.on('connect', onConnect);


function onConnect(socket){
  console.log('connect ' + socket.id);

  socket.on('disconnect', () => console.log('disconnect ' + socket.id));
}





// Routing
app.use(express.static(__dirname + '/public'));

app.get('/api/launch', (req, res, next) => res.send('boom'));
let polyConfigFile = require("./build/polymer.json");
app.get('/*', prpl.makeHandler('server/build',polyConfigFile));


//app.listen(3000, () => console.log('Express + prpl-server app listening on port 3000!'));
//server.listen(port, () => console.log('server listening on port ' + port));
server.listen(port, function () {
	console.log('Express + prpl-server app listening on port %d', port);
});

//Socket.IO
io.on('connect', function(){
	console.log("connecte");
});
io.on('event', function(data){
	console.log(data);
});
io.on('disconnect', function(){
	console.log("deconnecte");
});
