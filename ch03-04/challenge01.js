var fs = require('fs');
fs.open('./challenge01.txt','w+',null,function (err, fd) {
   if ( err ) throw err;
   var buf = new Buffer('name:kim\nage:29\nmobile:010-0000-0000');
   fs.write(fd,buf,0,buf.length,null,function (err1, written, buffer) {
      if ( err1 ) throw err1;
      console.log(buffer.toString('utf-8').split('\n')[0]);
   });
});


