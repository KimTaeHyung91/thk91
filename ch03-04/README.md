chapter 03
==========

자바스크립트의 객체와 함수 이해하기
---------
#### javascript == Type based on Language
var 라는 키워도르 변수를 선언. ( 자바와 다르게 타입이 없음), _compile 시 타입을 결정._<br>

자료형
---------
<ul>
<li>Boolean</li>
<li>Number</li>
<li>String</li>
<li>undefined</li>
<li>null</li>
<li>Object</li>
</ul>

typeof 키워드를 통해서 알 수 있음.

함수
---------
파라미터를 통해 로직을 수행 후 값을 리턴
<ul>
<li>익명 함수로 제작</li>
<li>변수로 할당하여 제작(var)</li>
<li>객체의 프로퍼티로 할당하여 제작</li>
</ul>

배열
---------
여러개의 데이터를 하나의 함수로 담아서 사용. 배열안에 있는 item 은 [] 대괄호 접근 가능. 각 item 은 index를 통해 접근 가능 ( 0부터 시작)<br>
배열.forEach(callback function); 배열 요소에 접근을 도와주는 forEach 구문.<br>
<ul>
<li>push : 끝에 추가</li>
<li>pop : 끝을 삭제</li>
<li>unshift : 앞에 추가 </li>
<li>shift : 앞을 삭제</li>
<li>splice (index,removeCount,Object) : 여러 개의 객체의 요소를 추가 및 삭제</li>
<li>slice (index,copyCount) : 여러개의 요소를 잘라내어 새로운 배열 객체 생성</li>
<li>delete  : 배열 중간을 삭제</li>
</ul>

콜백함수
---------
비동기 프로그래밍 방식으로 코드를 제작. 함수를 제작 시 다음 코드(함수를 파라미터로 사용)를 실행할때 사용. 노드는 대부분 비동기 프로그래밍을 사용.<br>
예를 들어 click 이벤트가 일어난 후 익명 함수를 실행시키는것과 동일.

프로토타입
---------
자바스크립트도 객체지향 프로그래밍을 할 수있으며 도와주는것이 프로토타입 객체이다. 원형이라는 뜻으로 인스턴스를 생성해서 사용한다.<br>
객체.prototype.property = function {} >> 실제 데이터를 담는것이 아닌 담기위한 틀을 생성. 실제 데이터는 new 연산자를 통해 담김.<br>
메모리를 효율적으로 관리 

chapter 04
==========

주소 문자열과 요청 파라미터 다루기
----
웹사이트에 접속하기위해서는 URL 정보를 알아야되는데 이 데이터는 Node 가 URL 객체(url module)를 가지고 있어서 접속이 가능.<br>
ex) https://www.test.com?name=kim&age=29 <br>
<ul>
<li>protocal : https</li>
<li>host : www.test.com</li>
<li>queryString : name=kim&age=29</li>
</ul>

<h4>주소문자열을 URL 객체로 변환하기</h4>
parse() : 주소 문자열을 URL 객체로 파싱<br>
format() : URL 객체를 주소 문자열로 파싱.
<h4>요청 파라미터 구분하기</h4>
parse() : 요청 파라미터 문자열을 요청 파라미터 객체로 파싱<br>
stringify() : 요청 파라미터 객체를 문자열로 파싱.
<h4>이벤트 이해하기</h4>
Node 는 대부분 이벤트 기반으로 동작. 비동기로 처리하기위해서 이벤트를 전달. 혹 이벤트로 알림 메세지를 보내는것과 동일.<br>
이 부분을 도와주는 것이 EventEmitter 이다.<br>
1.이벤트 리스너를 구현하는 객체는 EventEmitter 를 상속받는다.<br>
2.상속을 구현한 객체는 on()으로 리스너를 등록하고, emit() 을 통해 전달한다.

<h4>EventEmiiter 주요 메소드</h4>
<ul>
<li>on(event,listener) : 지정한 이벤트를 추가</li>
<li>once(event,listener) : 지정한 이벤트를 추가하지만 한번 실행 후 제거</li>
<li>removeListener(event,listener) : 지정한 이벤트를 제거</li>
</ul> 
process 객체를 통해서 이벤트를 주고 받았지만, 같은 이름의 이벤트가 충돌나는 경우가 있으므로 별도의 모듈을 제작해서 사용하기를 권장.<br>
이때 EventEmitter 객체를 상속받아 사용. 객체는 prototype을 사용하여 전달받은 이벤트의 로직을 세우고, 모듈을 호출하는 쪽에서 이벤트를 전달한다.<br>

<h4>파일다루기</h4>
Node의 파일 시스템은 파일을 다루는것과 디렉토리를 다루는것으로 나뉨. 동기식 IO 는 파일을 다 읽을때까지 대기 반면에 비동기식 IO 는 요청만 하고 다른 작업을 병행 이후 파일 작업이 다 끝나면 이벤트로 받아서 처리.<br>
동기식IO는 Synce 단어가 붙음.<br>

파일을 다루기위해서는 fs모듈을 사용. readFileSynce 는 동기식 IO 메소드이며 파일을 다 읽을때까지 다른작업은 할 수 없음.<br>

fs 모듈 메소드<br>
<ul>
<li>readFile(filename,encoding,callback) : 비동기식으로 파일을 읽음</li>
<li>readFileSynce(filename,encoding) : 동기식으로 파일을 읽음</li>
<li>writeFile(filename,data,encoding='utf8',callback) : 비동기식으로 파일 쓰기</li>
<li>writeFileSynce(filename,data,encoding='utf8') : 동기식으로 파일을 쓰기</li>
</ul>

파일을 직접 열고 닫으면서 읽고, 쓰기 >> 리눅스 프로그래밍이랑 유사
<ul>
<li>open(path,flag,mode,callback) : 파일 열기</li>
<li>read(fd,buffer,offset,length,position,callback) : 지정한 부분의 파일 내용을 읽음</li>
<li>write(fd,buffer,offset,length,position,callback) : 지정한 부분에 데이터를 쓰기</li>
<li>close(fd,callback) : 파일 닫기</li>
</ul>
※ fd : file discriptor > 0번 : 표준 입력, 1번 : 표준 출력, 2번 : 표준 에러 이므로 실제 파일을 생성하면 3번부터 배정받게됨.<br><br> 

flag
<ul>
<li>'r' : 읽기 사용하는 플래그 파일 없으면 예외 발생</li>
<li>'w' : 쓰기에 사용되는 플래그 없으면 만들어지고, 내용이 있으면 모두 지움</li>
<li>'w+' : 읽기 + 쓰기 파일이 없으면 만들어지고, 이전 내용 모두 지움</li>
<li>'a+' : 읽기 + 쓰기 파일이 없으면 만들어지고, 이전내용에 새로운 내용이 추가.</li>
</ul>

스트림단위로 파일 읽고 쓰기<br>
스트림은 전달되는 통로를 얘기함 ( 이전에는 data 단위로 읽고, 쓰기 )
<ul>
<li>createReadStream(path,[option])</li>
<li>createWriteStream(path,[option])</li>
</ul>