## React 시작
- npm create vite@latest 폴더명 --template react
- cd 폴더명
- code .
- npm install                              // (node_modules) 패키지 인스톨


## 폴터 삭제
Remove-Item 폴더명 -Recurse -Force

## 프로젝트 실행
npm run dev

## 나만의 시작 명령어 만드는 방법
- package.json > "dev" : "vite" 위에 > "start" : "vite" 기재 > 터미널에 npm start

## React의 장점
1. 빠른 개발 서버 제공
2. 빌드 속도 향상
3. React 19 및 최신 기능 지원

: Vite를 사용하면 기존 CRA 프로젝트를 쉽게 변환할 수 있으며, 추가적인 설정 없이 더 나은 성능을 제공할 수 있다.


react는 싱글 페이지 애플리케이션이다.
즉, 페이지는 한개이지만 여러 페이지로 운영하는 것처럼 보여질 수 있다.
create-react-app으로 생성하면 파일명이 index.js이다.

main.jsx는 react와 index파일의 연결고리 같은 거다.
컴포넌트는 JS + HTML이 같이 있으며 시작은 대문자로 시작한다.

## react 컴포넌트 자동완성 생성 단축키 
rafce


## 컴포넌트 생성 및 중첩하기
: 컴포넌트는 고요한 로직과 모양을 가진 사용자 인터페이스의 일부
  컴포넌트는 버튼만큼 작을 수도 있고 전체 페이지만큼 클 수도 있다.


## 데이터 표시
: JSX를 사용하면 자바스크립트에 마크업을 넣ㅇ르 수 있다.
  중괄호를 사용하면 코드에서 일부 변수를 삽입하여 사용자에게 표시할 수 있도록 자바스크립트로 "이스케이프 백"할 수 있다.


## 1. React 란?
: 기존에는 HTML을 한 페이지에 길게 작성했다면, React는 화면을 작은 조각으로 나눠서 만듬
<Header />
<Main />
<Footer />


## 2. 컴포넌트 Component
: 재사용 가능한 UI 조각

function Button() {
    return <button> 확인 </button>
}
function App() {
    return (
        <div>
            <Button />
            <Button />
            <Button />
        </div>
    );
}


## 3. JSX
: JSX는 JavaScript + HTML 합친 문법

const name = "홍길동";
function App() {
    return <h1> {name}닌 안녕하세요.</h1>;
}


## 4. 조건부 렌더링
: 일반적인 자바스크립트 코드를 작성할 때 사용하는 것과 동일한 방법을 사용한다.
  예를 들어 if문을 사용하여 조건부로 JSX를 포함할 수 있다.

function AdminPanel() {
  return <h2>관리자 페이지</h2>;
}

function LoginForm() {
  return <h2>로그인 해주세요</h2>;
}

function App() {
    const isLoggedIn = true;

    {/* 삼항 연산자 */}
    <div>
        {isLoggedIn ? <AdminPanel /> : <LoginForm />}
    </div>

    {/* && 연산자 */}
    <div>
        {isLoggedIn && <AdminPanel />}
    </div>
}