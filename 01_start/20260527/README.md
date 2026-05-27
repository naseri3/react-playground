# Component
컴포넌트(Component)는 React에서 UI를 구성하는 독립적인 화면 단위이다.
React 애플리케이션은 여러 개의 컴포넌트를 조합하여 화면을 구성
컴포넌트는 함수 형태로 작성하며, JSX를 반환하여 화면에 표시한다.

## Component 사용 이유
웹 사이트의 UI는 반복되는 요소가 많다.

예시 : 버튼, 헤더, 카드, 메뉴, 게시글, 입력 폼

- 재사용 가능
- 유지보수 용이
- 코드 구조화

## Component 언제 사용하는 가?
- 반복되는 UI를 만들 때
- 화면을 기능별로 분리할 때
- 유지보수를 쉽게 하고 싶을 때
- 재사용 가능한 UI가 필요할 때

## Component 특징
- 대문자로 시작해야 한다.
- 하나의 컴포넌트는 하나의 역할을 담당한다.
- 다른 컴포넌트 안에서 사용할 수 있다.

function Header() {
    return <h1>헤더 영역</h1>
}
function App() {
    return (
        <div>
            <Header />
        </div>
    )
}




# JSX 개념
JSX(JavaScript XML)는 JavaScript안에서 HTML과 유사한 문법을 사용할 수 있도록 만든 React 문법이다.
React에서는 JSX를 사용하여 화면을 작성한다.
브라우저는 JSX를 직접 이해하지 못하므로, React가 내부적으로 JavaScript 코드로 변환


## JSX 사용 이유
기존 JavaScript로 DOM 요소를 생성하려면 코드가 복잡

const h1 = document.createElement("h1");
h1.innerText = "안녕하세요.";

JSX를 사용하면 HTML처럼 직관적으로 작성 가능
<h1> 안녕하세요. </h1>

- 가독성 향상
- 코드 작성 편리
- UI 구조 파악 쉬움

## JSX 언제 사용하는 가?
- 화면을 작성할 때
- 컴포넌트 내부에서 화면을 반활할 때


## JSX 특징
- HTML과 비슷한 문법 사용
- JavaScript 표현식은 {} 안에서 사용
- 반드시 하나의 부모 요소로 감싸야 함

const name = "철수";
function App() {
    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
}




# Props 개념
Props는 부모 컴포넌트가 자식 컴포넌트에게 데이터를 전달하기 위한 객체이다.
Props는 읽기 전용(Read Only)이며, 자식 컴포넌트에서 직접 수정할 수 없다.


## Props 사용 이유
컴포넌트 간 데이터 전달이 필요하기 때문에 사용

- 사용자 이름 전달
- 상품 정보 전달
- 버튼 색상 전달
Props를 사용하면 동일한 컴포넌트를 다양한 ㄷ이터로 재사용할 수 있다.


## Props 언제 사용하는 가?
- 부모 → 자식 컴포넌트 데이터 전달 시
- 컴포넌트 재사용 시
- 동적인 UI 구성 시


## Props 특징
- 단방향 데이터 흐름
- 읽기 전용
- 객체 형태로 전달 됨

function Profile(props) {
    return <h2> {props.name} </h2>;
}
function App() {
    return <Profile name="민수" />;
}




# State 개념
State는 컴포넌트 내부에서 관리되는 변경 가능한 데이터이다.
State 값이 변경되면 React는 컴포넌트를 다시 렌더링(Re-rendering)하여 화면을 업데이트 함
React에서는 useState Hook을 사용하여 state를 관리한다.


## State 사용이유
웹 애플리케이션의 화면은 계속 변화

예시 :
- 로그인 상태 변경
- 좋아요 수 증가
- 입력값 변경
- 메뉴 열기/닫기

이러한 동적인 데이터를 관리하기 위해 state를 사용한다


## State 언제 사용하는 가?
- 값이 변경되는 경우
- 화면 업데이트가 필요한 경우
- 사용자 이벤트가 발생하는 경우


## State 특징
- 값 변경 가능
- 값 변경 시 재렌더링 발생
- useState 사용

import { useState } from "react";

function App() {
    const [count, setCount] = useState(0);
    return {
        <div>
            <h1> {count} </h1>
            <button onClick={() => setCount(count + 1)}>
                증가
            </button>
        </div>
    }
}

.


# 조건부 렌더링(Conditional Rendering) 개념
조건부 렌더링은 조건에 따라 서로 다른 UI를 화명에 출력하는 방식이다.
React에서는 JavaScript의 조건문을 사용하여 조건부 렌더링을 구현한다.


## 조건부 렌더링 사용 이유
웹 화면은 상황에 따라 다르게 표시되어야 한다

예시 :
- 로그인 여부
- 관리자 권한 여부
- 데이터 존재 여부
- 로딩 상태

조건에 따라 다른 화면을 출력하기 위해 사용한다.


## 조건부 렌더링 언제 사용하는 가?
- 로그인 상태 처리
- 로딩 화면 처리
- 에러 메시지 출력
- 상세보기 토글
- 관리자 메뉴 출력


## 조건부 렌더링 대표적인 방식

1. if문
if(isLogin) {
    return <Main />;
} else {
    return <Login />;
}
2. 삼항 연산자
{isLogin ? <Main /> : <Login />}
3. && 연산자
{isAdmin && <AdminPage />}


# 조건부 렌더링 특징
- 조건에 따라 다른 UI 출력
- JSX 내부에서 사용 가능
- JavaScript 조건문 활용