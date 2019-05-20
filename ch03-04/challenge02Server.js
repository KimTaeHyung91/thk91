var io = require('socket.io').listen(3000);
console.log('Socket Server Run!');

/*io.sockets.on('connection',function ( socket ) {
    socket.on('call',function ( data ) {
        console.log(data);
    });
});*/


/*
* var server = require( 'socket.io')(8888);



 var simple = server.on( 'connection', function( socket) {

 console.log( 'someone connect.');



 socket.on( 'message', function( data) {

 console.log( 'received message is ---------------');

 console.log( data);

 console.log( '--------------------------');



 socket.broadcast.send( data); // send to everyone EXCEPT 'socket'

 socket.send( data); // send to 'socket'

 console.log( 'I echoed for msg.');

 });



 socket.on( 'disconnect', function() {

 console.log( 'someone disconnect.');

 socket.broadcast.send( 'someone disconnect.');

 });

 });





 <cli.js 클라이언트쪽 코드. 단순히 서버소켓에 접속해서 첫 메시지를 보내고, 일정 주기마다 메시지를 보낸다.>



 var io = require( 'socket.io-client');

 var socket = io( 'http://127.0.0.1:8888');



 socket.on( 'connect',

 function() {

 console.log( 'connected!');

 socket.send( 'first time.. nice to meet you.');

 console.log( '(sent first msg)');

 }

 );



 socket.on( 'message', function( data) {

 console.log( "received from server----------");

 console.log( data);

 console.log( "------------------------------");



 setTimeout( function(){ socket.send( 'nice to meet you too.'); },1000);

 });
*출처 : http://egloos.zum.com/rucaus/v/2495639
* */