Chapter 02
=======

Console 객체
-----

<h3>console 객체는 global object</h3>

- global object in javascript

1. console : 콘솔창에 보여주는 객체
2. process : 프로세스의 실행에 대한 정보를 다루는 객체
3. exports : 모듈을 다루는 객체
4. __filename : 실행한 파일의 이름, 전체 경로의 정보
5. __dirname : 실행한 파일이 들어있는 폴더, 폴더의 전체 경로의 정보

* console.log() 도 "%"를 이용하여 데이터를 출력할수있음.<br>
'%d' : 숫자<br>
'%s' : 문자열<br>
'%j' : JSON 객체


<h3>method of console</h3>
1. dir(object) : 객체 속성 출력<br>
2. time(id) : 시작시간 기록<br>
3. timeEnd(id) : 끝시간을 기록<br>

<h3>process object</h3>
1. argv : parameter 정보(array)<br>
2. env : 환경 변수 정보<br>
3. exit() : 종료 메소드<br>

<h3>노드에서 모듈 사용하기</h3>
main.js 라는 파일에서 모든 기능을 구현 하는거보다는 기능별로 함수를 구현하는것이 재사용성 측면에서 호율이 더 높음.<br>

1. as-is : main.js > A Function, B Function, C Function<br>
2. to-be : main.js > Call A.js, Call B.js, Call C.js == Module > main.js 는 코드의 흐름만을 제어<br>
ex)<br>
main.js<br>
 ``var moduleA = require('A');``<br>
 ``moduleA.{"Name of Method"}``<br>
 A.js<br>
 ``exports.{"Name of Method"} = Define Method;``<br>

 1-1) require : module 을 호출, 호출 시 반환되는 값은 모듈 객체<br>
 1-2) exports vs module.exports : exports 객체는 하나의 변수만을 사용, 객체를 직접 할당 이에 반해 module.exports는 여러개의 변수를 사용 또는 각각의 속성을 추가가능.<br>
 <h3>외장모듈 사용하기</h3>
 이미 만들어진 모듈은 require 를 통해 호출해서 사용하면 끝!<br>
 그렇다면 이미 만들어진 모듈은 어디있니~? npm을 이용하자!<br>
 npm : node package manager, command : npm install {"Name of Module"}
<br>package.json 에 추가하는법 : --save 옵션과 npm install 을 통해 dependencies 를 추가 할 수 있음.
<h3>내장모듈 사용하기</h3>
노드를 설치했을때 기본적으로 들어있는 모듈, 외장모듈은 npm 을 통해 설치<br>
os module, path module > http://nodejs.org/api<br><br>
<h4>os module : 시스템 정보를 알려주는 모듈</h4>
hostname() : 운영체제의 호스트 이름<br>
totalmem() : 시스템의 전체 메모리<br>
freemem() : 사용가능한 메모리<br>
cpus() : CPU 정보<br>
networkInterface() : 네트워크의 인터페이스 정보를 담은 배열 객체를 반환
<h4>path module : 파일 경로를 다루는 모듈</h4>
join() : 여러개의 이름을 하나의 파일 패스로 합침. 구분자를 통해 완성<br>
dirname() : 디렉토리 이름 반환<br>
basename() : 파일의 확장자를 제외한 이름을 반환<br>
extname() : 파일의 확장자를 반환.