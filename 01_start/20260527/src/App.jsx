import { useState } from 'react';
import Header from './assets/Header';
import UserCard from './assets/UserCard';
import ProductCard from './assets/ProductCard';
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const isLogin = true;

  const [isLogin1, setIsLogin1] = useState(false);
  const [isLogin2, setIsLogin2] = useState(false);

  const products = [
    {id:1, name:"노트북", price: 1200000, isSoldOut: false},
    {id:2, name:"마우스", price: 30000, isSoldOut: true},
    {id:3, name:"키보드", price: 80000, isSoldOut: true}
  ];

  const [text, setText] = useState("");

  const [name, setName] = useState("");

  return (
    <>
        {/* component */}
        <div className='wrap'>
            <Header />
            <p>메인 페이지</p>
        </div>



        {/* props */}
        <div>
            <UserCard name="민수" age={25} />
            <UserCard name="지영" age={30} />
        </div>

        {/* state */}
        <div>
            <h1>카운트 : {count}</h1>
            <button onClick={() => setCount(count + 1)}>
                증가
            </button>
            <button onClick={() => setCount(count - 1)}>
                감소
            </button>
        </div>



        {/* 조건부 렌더링 */}
        <div>
            {isLogin ? <p>환영합니다!</p> : <p>로그인이 필요합니다.</p>}
        </div>



        {/* state + 조건부 렌더링 */}
        <div>
            {isLogin1 ? <h2>로그인 상태입니다.</h2> : <h2>로그아웃 상태입니다.</h2>}
            <button onClick={() => setIsLogin1(!isLogin1)}>
                {isLogin1 ? "로그아웃" : "로그인"}
            </button>
        </div>

        {/* component + props + state */}
        <div>
            <StatusMessage isLogin2={isLogin2} />
            <button onClick={() => setIsLogin2(!isLogin2)}>
                상태 변경
            </button>
        </div>
        {/* 흐름
        - App이 isLogin state를 가지고 있음
        ↓
        - StatusMessage에게 props로 전달
        ↓
        - StatusMessage는 isLogin 값에 따라 화면을 다르게 보여줌
        */}



        {/* 리스트 렌더링 + props */}
        <div>
            {products.map((product) => (
                <ProductCard key={product.id} name={product.name} price={product.price} isSoldOut={product.isSoldOut} />
            ))}
        </div>



        {/* 입력값 State */}
        <div>
            <input value={text} onChange={(e) => setText(e.target.value)} placeholder='이름을 입력해주세요.' />
            {/* e.target.value : input에 입력한 값 가져오기 */}
            <p>입력한 값 : {text}</p>
        </div>



        {/* 입력값 + 조건부 렌더링 */}
        <div>
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder='이름 입력' />
            {name ? (<p>{name}님 안녕하세요.</p>) : (<p>이름을 입력해주세요.</p>)}
        </div>
    </>
  )
}

function StatusMessage({isLogin2}) {
    return (
        <div>
            {isLogin2 ? <p>환영합니다!</p> : <p>로그인해주세요.</p>}
        </div>
    )
}


export default App
