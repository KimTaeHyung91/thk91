var age = 20;
console.log('나이 : %d',age);

var name = '소녀시대';
console.log('이름 : %s\n',name);

var Person = {};

Person['age'] = 20;
Person['name'] = '소녀시대';
Person.mobile = '010-1000-1000';

console.log('나이 : %d',Person.age);
console.log('이름 : %s',Person.name);
console.log('전화 : %s\n',Person.mobile);

function add( a, b ) {
    return a + b;
}
/*
* var add = function ( a,b ) {
*   return a + b;
* }
*
* 객체에 할당 가능.
* Person.add = function ( a, b ) {
*   return a + b;
* }
* */

var result = add(10,10);

console.log("add(10,10) : %d\n",result);

var Users = [{name:'소녀시대',age:20},{name:'걸스데이',age:22}];

Users.push({name:'티아라',age:23});

console.log('사용자 수 : %d',Users.length);
console.log('첫번째 사용자 이름 : %s\n',Users[0].name);

console.log('배열 수 : %d',Users.length);
for ( var i = 0; i < Users.length; i++ ) {
    console.log('배열의 요소 #'+i+': %s',Users[i].name);
}
console.log('\n');
console.log('forEach 문 사용하기 callback function');
Users.forEach(function (item,index) {
    console.log('배열의 요소 #'+index+': %s',item.name);
});
console.log('\n');
/*
* foreach( var item in Users ) {
*   var index = 0;
*   console.log('배열의 요소 #'+(++index)+': %s',item.name);
* }
* */

/*function add( a, b, callback ) {
    var result = a + b;
    callback(result);
}

add(10,10,function ( result ) {
   console.log('파라미터로 전달된 콜백 함수 호출.');
   console.log('add(10,10) 의 결과 : %d',result);
});*/

var Person = function ( name, age ) {
    this.name = name;
    this.age = age;
};

Person.prototype.walk = function ( speed ) {
    console.log(speed+'km 속도로 걸어갑니다.');
};

var person1 = new Person('소녀시대',20);
var person2 = new Person('걸스데이',22);

console.log(person1.name+' 객체의 walk(10)을 호출합니다.\n');
person1.walk(10);


//chapter 04
var url = require('url');

var curURL = url.parse('https://m.search.naver.com/search.naver?query=steve+jobs&where=m&sm=mtp_hty');
var curStr = url.format( curURL );

console.log('주소 문자열:%s',curStr);
console.log(curURL);
console.log('\n');

//요청 파라미터 구분하기
var queryString = require('querystring');
var param = queryString.parse(curURL.query);

console.log('요청 파라미터 중 query의 값 : %s',param.query);
console.log('원본 요청 파라미터 : %s\n',queryString.stringify(param));

//EventEmitter

//emit() : 이벤트 전달
/*process.on('tick',function ( count ) {
   console.log('tick 이벤트 발생함 : %s',count);
});

setTimeout(function () {
    console.log('2초 후에 tick 이벤트 전달 시도함');
    process.emit('tick','2');
},2000);*/

// on()
/*process.on('exit',function () {
    console.log('exit 이벤트 발생함');
});

setTimeout(function () {
    console.log('2초 후에 시스템 종료 시도함.');
    process.exit();
},2000);*/

//EventEmitter 객체를 상속해서 만든 계산기 객체
var Calc = require('./calc3');

var calc = new Calc();
calc.emit('stop');

console.log(Calc.title + '에 stop 이벤트 전달됨\n');

//파일다루기
var fs = require('fs');
var data = fs.readFileSync('./package.json','utf8');
console.log(data);
console.log('\n');

fs.readFile('./package.json','utf8',function (err, data1) {
   console.log(data1);
});
//파일을 다읽을때까지 다음 코드가 실행. >> 비동기식 IO
console.log('프로젝트 폴더 안의 package.json 파일을 읽도록 요청했습니다.\n');

/*
fs.writeFile('./output.txt','Hello World',function (err) {
    if ( err ) {
        console.log('Error : ' + err);
    }

    console.log('output.txt 파일에 데이터 쓰기 완료');
});

fs.open('./output.txt','w',function (err, fd) {
   if ( err ) throw err;

   var buf = new Buffer('안녕\n');
   fs.write(fd,buf,buf.length,null,function (err1, written, buffer) {
      if ( err1 ) throw err1;

      console.log(err1,written,buffer);

      fs.close(fd,function () {
          console.log('파일 열고, 데이터 쓰고 파일 닫기 완료');
      })
   });
});*/

/*
fs.open('./output.txt','r',function (err, fd) {
   if ( err ) throw err;

   var buf = new Buffer(10);
   console.log('버퍼타입:%s',Buffer.isBuffer(buf));

   fs.read(fd,buf,0,buf.length,null,function (err1, bytesRead, buffer) {
      if ( err1 ) throw err1;

      var inStr = buffer.toString('utf8',bytesRead);
      console.log('파일에서 읽은 데이터 : %s',inStr);

      console.log(err1,bytesRead,buffer);

      fs.close(fd,function () {
          console.log('output.txt 파일 열고 읽기 완료');
      })
   });
});*/

/*var infile = fs.createReadStream('./output.txt',{flag:'r'});
var outfile = fs.createWriteStream('./output2.txt',{flag:'w'});

infile.on('data',function (data) {
    console.log('읽어 들인 데이터',data);
    outfile.write(data);
});

outfile.on('end',function () {
   console.log('파일 읽기 종료');
   outfile.end(function () {
      console.log('파일 쓰기 종료');
   });
});*/


/*
var inname = './output.txt';
var outname = './output2.txt';

fs.exists(outname,function (exists) {
   if ( exists ) {
       //unlink 는 기존 파일이 존재하면 삭제해주는 메소드
       fs.unlink(outname,function (err) {
           if ( err ) throw err;
           console.log('기존파일['+outname+'] 삭제함');
       });
   }
    var infile = fs.createReadStream(inname,{flag:'r'});
    var outfile = fs.createWriteStream(outname,{flag:'w'});
    //pipe 를 쓰면 읽기 스트림과 쓰기 스트림을 연결해서 마치 복사한거와 같은 효과를 가짐.
    infile.pipe(outfile);
    console.log('파일 복사['+inname+'] -> ['+outname+']');
});*/

var http = require('http');
var server = http.createServer(function (req, res) {
   var instream = fs.createReadStream('./output.txt');
   instream.pipe(res);
});
server.listen(7001,'127.0.0.1');

fs.mkdir('./docs',0666,function (err) {
   if ( err ) throw err;
   console.log('새로운 docs 폴더를 만들었습니다.');

   fs.rmdir('./docs',function (err1) {
       if ( err1 ) throw err1;
       console.log('docs 폴더를 삭제했습니다.');
   });
});

/*var winston = require('winston');
var winstonDaily = require('winston-daily-rotate-file');
var moment = require('moment');

function timeStampFormat() {
    return moment().format('YYYY-MM-DD HH:mm:ss.SSS ZZ');
}

var logger = new (winston.loggers)({
   transport : [
       new (winstonDaily)({
           name:'info-file',
           filename:'./log/server',
           datePattern : '_yyyy-MM-dd.log',
           colorize : false,
           maxsize:5000000,
           maxFiles:1000,
           level:'info',
           showLevel:true,
           json:false,
           timestamp:timeStampFormat
        }),
       new (winston.transport.Console)({
            name:'debug-console',
            colorize : false,
            level:'debug',
            showLevel:true,
            json:false,
            timestamp:timeStampFormat
        })

   ],
    exceptionHandler : [
        new (winstonDaily)({
                               name:'exception-file',
                               filename:'./log/server',
                               datePattern : '_yyyy-MM-dd.log',
                               colorize : false,
                               maxsize:5000000,
                               maxFiles:1000,
                               level:'error',
                               showLevel:true,
                               json:false,
                               timestamp:timeStampFormat
        }),
        new (winston.transport.Console)({
                                            name:'exception-console',
                                            colorize : false,
                                            level:'debug',
                                            showLevel:true,
                                            json:false,
                                            timestamp:timeStampFormat
                                        })
    ]
});*/
