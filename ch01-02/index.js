var object = {
    'name'  : 'Kim',
    'height': '170'
};

console.log( 'test' );
console.log( 'Height is %d', object.height );
console.log( 'Name is %s', object.name );
console.log( 'JSON Data : %j', object );
console.dir( object );
console.log( process.env );
console.log( 'OS 환경변수 : ' + process.env[ 'OS' ] );

var calc = {};
calc.add = function ( a, b ) {
    return a + b;
};
console.log( '모듈로 분리하기 전 - calc.add 함수 결과 : ' + calc.add( 10, 10 ) );

var moduleCalc = require( './calc' );
console.log( '모듈로 분리하기 후 - calc.add 함수 결과 : ' + moduleCalc.add( 10, 10 ) );

//module.exports 는 moduleCalc2 객체에 그대로 할당( calc2.js 에 선언한 객체 )
var moduleCalc2 = require( './calc2' );
console.log( '모듈로 분리하기 후 - calc2.add 함수 결과 : ' + moduleCalc2.add( 10, 10 ) );

//외장모듈
var nconf = require( 'nconf' );
nconf.env();
console.log( 'OS 환경변수의 값 : ' + nconf.get( 'OS' ) );

//내장모듈 os
var os = require( 'os' );
console.log( 'hostname of system : %s', os.hostname() );
console.log( 'memory of system : %d / %d', os.freemem(), os.totalmem() );
console.log( 'cpu info of system\n' );
console.log( os.cpus() );
console.log( 'network interface info of system\n' );
console.log( os.networkInterfaces() );

//내장모듈 path
var path = require( 'path' );

//이름 합치기
var directories   = [ 'users', 'mike', 'docs' ];
var docsDirectory = directories.join( path.sep );
console.log( '문서 디렉토리 : %s', docsDirectory );

//이름과 파일 합치기
var curPath = path.join( 'Users/mike', 'notepad.exe' );
console.log( '파일 패스 : %s', curPath );

//경로에서 디렉토리, 이름, 확장자 구별
var filename = 'C:\\Users\\mike\\notepad.exe';
var dirname  = path.dirname( filename );
var basename = path.basename( filename );
var extname  = path.extname( filename );
console.log( '디렉토리 : %s, 파일 이름 : %s, 확장자 : %s', dirname, basename, extname );
