# React 가위바위보 게임

## 소개

리액트를 이용하여 만든 가위바위보 게임입니다.   
먼저 점수 15점을 획득하는 사람이 이기는 게임입니다.

## 배포링크

배포방식은 AWS S3의 간이 배포를 이용하였습니다.

## 개발 도구 및 환경

1. 개발환경 : VSCode,npm
2. 개발도구 : react,css,html

## 프로젝트 설명

### 프로젝트 계획서

### 헤더부분

게임 설명부분을 넣어주었다 App.js에 컴포넌트를 만들어주고 관련 css를 작성해 넣어주었다.

### Reset버튼

먼저 따로 Button.js라는 컴포넌트를 만들어주고 App.js에 import 했다.
reset 함수를 새로 만들어 reset에 필요한 코드들을 작성해주고 Onclick를 이용해 reset을 넣어주었다
버튼을 누르면 전체 게임이 리셋이 된다

### 점수판 (container부분)
나의 점수와 컴퓨터가 랜덤으로 나오는 점수를 만들기 위해  
state를 활용했다. 먼저 나의 점수 score 를 state, 그리고 상대방 점수도 state 해준다
그리고 컴포넌트 부분에 넣어준다


### 이미지와 버튼

가위바위보 패를 고르고 그 패가 화면이 뜨게 하는 기능을 만드려면
Border 컴포넌트를 생성하고 그 안에 이미지 파일을 import 해준다.
그리고 변수 RSP를 만들어 각각 이름과 이미지를 넣어준다
Border 컴포넌트 안에는 value값을 props 시키고
다시 또 변수 rsp를 만들어 RSP[value]를 넣어준다
내보내기 위해서 <img> 안에 이미지와 value값을 넣어준다.
App.js로 돌아와서 import 시킨 Border를 2개 생성하고 value값을 먼저 state 시켜둔 hand의 값과 otherhand를 넣어준다
그 이미지가 바뀌게 하려면 먼저 버튼이 필요하다. HandButton이라는 컴포넌트를 생성시켜주고 화살표 함수를 넣어 
onClick 함수를 value값으로 실행시킨다. 이 때, onClick 함수는 상위 컴포넌트인 App에서 prop(nextHand)으로 내려준 ButtonClick 함수이다. Button 클릭이 실행 되는것! 그리고 각각에 맞는 이모지를 넣어주었다


### 배점 선택

원하는 숫자로 배점을 정하면 게임이 진행 될때마다 승리하는 쪽이 점수를 얻을 수 있다.
handleBetChange 함수를 만들어서 input value의 속성을 참조 할 수 있는 e.target.value 를 가저온다
또한 문자열이기 때문에 숫자로 변환해줬다.
null 값을 방지하기 위해서 input 태그 안에 1과 6사이의 숫자를 만들어주기 위한 코드를 작성해준다
Math.floor를 사용하여 num을 반환해준다 
다시 컴포넌트에 type,value,최대숫자와 최소숫자를 넣어주고 onChange prop를 이용하여 값이 변경 될 때마다 이벤트를 반환한다.

### 승부기록

먼저 게임 기록을 만들기 위해서 gameHistory를 state해준다.
HandButton을 클릭하면 그 결과 값이 표시가 되는데 ButtonCclick 함수에서 처리 해주었다
Array의 내장매서드인 join을 활용하여 문자열로 반환 시켜준다.

### modal 창

내가 이겼는지 졌는지 확인할 수 있는 창이다.
Modal 컴포넌트를 생성해준다.
App.js에 modal state를 해주어 기본값을 false로 지정해두어 초기에는 모달창이 뜨지 않도록 한다
그리고 삼항 연산자를 이용하여 조건을 넣어 내가 이기면 '이겼습니다' 가 뜨게 하고 otherscore가 크면 '졌습니다'가 뜨게한다
이 텍스트는 props를 이용해서 만들었다.


## 자기평가
1. 아직 리액트에 대한 이해가 부족하여 더 좋은 게임을 만들지 못해서 아쉬웠다.





