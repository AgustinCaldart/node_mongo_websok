const socketIO = require('socket.io')
const socket = {}
let io
let conections = 0

function connect(server) {
	io = socketIO(server)
	socket.io = io

	//SokcetIO
	io.on('connection', (socket) => {
		console.log(`Connect...`)
		console.log(`Cantidad de conexiones: ${++conections}`)

		/** Aqui detectamos cada q un cliente se desconecte **/
/*		socket.on('disconnect', (message) => {
			console.log(`[DISCONNECT]: ${message}`)
			conections--
			showClients()
		})

		showClients()
	})
}
*/
/** Esta funcon muestra los ID de los clientes conectados **/
/*
function showClients() {
	io.clients((error, clients) => {
		if (error) throw error
		console.log(`[CLIENTS]: [${clients}]`)

    */    })
}

module.exports = {
	connect,
	socket,
}